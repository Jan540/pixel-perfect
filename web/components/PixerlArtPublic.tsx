import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { FC, MouseEventHandler, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { CHANGE_PIXEL } from '../graphql/code/changePixel';
import { ON_PIXEL_CHANGE } from '../graphql/code/onPixelChange';
import { PixelGrid } from '../types/PixelArtCanvasTypes';
import { ColorResult } from 'react-color';
import SAVE_CANVAS from '../graphql/mutations/saveCanvas';
import LOAD_CANVAS from '../graphql/query/loadCanvas';
import ComponentLoading from './componentLoading';
import { Box, Flex, Grid, GridItem, useToast } from '@chakra-ui/react';
import DrawingToolbar from './DrawingToolbar';
import { UserContext } from '../lib/User/Usercontext';
import SAVE_PUBLIC_CANVAS from '../graphql/mutations/savePublicCanvas';
import LOAD_PUBLIC_CANVAS from '../graphql/query/loadPublicCanvas';
import ColorPicker from './ColorPicker';

type PixelArtCanvasProps = {
  width?: number;
  height?: number;
  id: string;
};

const PixelArtPublic: FC<PixelArtCanvasProps> = ({ width, height, id }) => {
  //useStates
  const [grid, setGrid] = useState<PixelGrid>([]);
  const [color, setColor] = useState<string>('rgb(0, 0, 0)');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [loadedColors, setLoadedColors] = useState<string>();
  const [scale, setScale] = useState(0.15);
  const [mouseOver, setMouseOver] = useState(false);
  const minScale = 0.1;
  const [initialCursorPosition, setInitialCursorPosition] = useState({ x: 0, y: 0 });
  //useContext
  const { user } = useContext(UserContext);

  //useRef
  const ref = useRef<HTMLDivElement>(null);

  //useToast
  const toast = useToast();

  //useMutation
  const [submitChange, { loading: submitLoading, error: submitError }] = useMutation(CHANGE_PIXEL);
  const [savePublic, { data: savePublicData, error: savePublicError }] =
    useMutation(SAVE_PUBLIC_CANVAS);

  //useQuery
  const { data: colorsData, error: colorsError } = useQuery(LOAD_PUBLIC_CANVAS, {
    variables: { input: id },
  });

  const { data, error } = useSubscription(ON_PIXEL_CHANGE, {
    onData: (onChangeData) => {
      if (!onChangeData.data.data) return;
      const { onPixelChange } = onChangeData.data.data;
      if (!onPixelChange) return;
      drawPixelChange(onPixelChange!.row, onPixelChange!.col, onPixelChange!.color);
    },
    variables: {
      canvasId: id,
    },
  });

  // functions
  const drawPixelChange = (row: number, col: number, color: string) => {
    const pixel = document.getElementById(`pixel-${row}-${col}`);
    if (!pixel) return;

    if (pixel.style.backgroundColor !== color) {
      pixel.style.backgroundColor = color;
    }
  };

  const createGrid = useCallback(() => {
    const newGrid: PixelGrid = [];
    for (let i = 0; i < height!; i++) {
      newGrid.push([]);
      for (let j = 0; j < width!; j++) {
        newGrid[i].push({ color: 'rgb(255,255,255)' });
      }
    }
    setGrid(newGrid);
  }, [width, height]);

  const loadGrid = useCallback(() => {
    const colorData = JSON.parse(loadedColors!);

    if (!colorData) {
      setLoading(false);
      return;
    }
    // TODO: maybe change?
    for (let i = 0; i < width!; i++) {
      for (let j = 0; j < height!; j++) {
        const pixel = document.getElementById(`pixel-${i}-${j}`) as HTMLDivElement;
        pixel.style.backgroundColor = colorData[i][j];
      }
    }

    setLoading(false);
  }, [loadedColors, width, height]);

  const saveGrid = () => {
    const mainDiv = document.getElementById('pixel-grid') as HTMLDivElement;
    const rows = mainDiv.children;

    let grid: string[][] = [];
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i] as HTMLDivElement;
      const rowData: string[] = [];

      for (let j = 0; j < row.children.length; j++) {
        const cell = row.children[j] as HTMLDivElement;
        rowData.push(cell.style.backgroundColor);
      }
      grid.push(rowData);
    }
    try {
      // Remove Authorize
      savePublic({
        variables: { input: { canvas_id: id, colors: JSON.stringify(grid) } },
      });
    } catch {
      console.log('error saving canvas');
    }
  };

  function handleWheel(event: any) {
    if (!mouseOver) return;
    if (event.deltaY < 0) {
      const newScale = scale + 0.1;
      setScale(newScale > minScale ? newScale : minScale);
    } else {
      const newScale = scale - 0.1;
      setScale(newScale > minScale ? newScale : minScale);
    }
  }
  const handleColorChange = (newColor: ColorResult) => {
    setColor(`rgb(${newColor.rgb.r}, ${newColor.rgb.g}, ${newColor.rgb.b})`);
  };

  const handlePixelChange = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    row: number,
    col: number,
  ) => {
    let pixel = e.currentTarget;

    await updatePixel(pixel, color, row, col);
  };

  const updatePixel = async (
    pixel: EventTarget & HTMLDivElement,
    color: string,
    row: number,
    col: number,
  ) => {
    if (!user.username) {
      toast({
        title: 'Error',
        description: 'You must be logged in to place a pixel! 📉📉📉📉',
        status: 'error',
        duration: 5000,
        isClosable: true,
        variant: 'top-accent',
        position: 'bottom-right',
      });
    }
    if (pixel.style.backgroundColor === color) {
      return;
    }

    try {
      await submitChange({
        variables: {
          input: {
            payload: {
              row,
              col,
              color,
              canvasId: id,
            },
          },
        },
      });
      pixel.style.backgroundColor = color;
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    if (!submitError) return;
    toast.closeAll();
    toast({
      title: 'Error',
      description: submitError.message,
      status: 'error',
      duration: 5000,
      isClosable: true,
      variant: 'top-accent',
      position: 'bottom-right',
    });
  }, [submitError, toast]);

  const handleMouseDown = (e: any) => {
    if (e.button === 1) {
      setDragging(true);
      setInitialCursorPosition({ x: e.clientX, y: e.clientY });
    }
    setMouseDown(true);
    setDragging(true);
  };

  const handleMouseUp = (e: any) => {
    setMouseDown(false);
    setDragging(false);
    saveGrid();
  };

  const handleMouseMove = (e: any) => {
    if (dragging) {
      setPosition({
        x: ref.current?.offsetLeft! + (initialCursorPosition.x - e.clientX),
        y: ref.current?.offsetTop! + (initialCursorPosition.y - e.clientY)
      });
  
    }
  };

  //useEffect
  useEffect(() => {
    createGrid();
    if (!colorsData) {
      if (typeof window !== 'undefined') setLoading(false);
      return;
    }
    setLoadedColors(colorsData.loadPublicCanvas);
    console.log('loaded colors', loadedColors);
    if (!loadedColors) {
      if (typeof window !== 'undefined') setLoading(false);
      return;
    }

    loadGrid();
    setLoading(false);
  }, [colorsData, createGrid, loadGrid, loadedColors]);

  // styles
  const styles: React.CSSProperties = {
    transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
    userSelect: 'none',
    overflow: 'hidden',
  };

  return (
    <Flex
      justifyContent='center'
      alignContent='center'
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {loading && <ComponentLoading />}
      <ColorPicker onColorChange={handleColorChange} />
      <Flex
        ref={ref}
        style={styles}
        id='pixel-grid'
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
        onMouseDown={handleMouseDown}
        onWheel={handleWheel}
        display={loading ? 'none' : 'block'}
      >
        {grid.map((row, i) => (
          <div key={i} style={{ display: 'flex', userSelect: 'none' }}>
            {row.map((pixel, j) => (
              <Flex
                id={`pixel-${i}-${j}`}
                key={j}
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: pixel.color,
                  cursor: 'crosshair',
                  userSelect: 'none',
                }}
                onClick={(e) => handlePixelChange(e, i, j)}
                // Dont need for the public version
                // onMouseMove={(e) => handlePixelMouseMove(e, i, j)}
              />
            ))}
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

export default PixelArtPublic;
