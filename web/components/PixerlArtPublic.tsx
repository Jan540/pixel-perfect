import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { FC, useCallback, useContext, useEffect, useRef, useState } from 'react';
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

type PixelArtCanvasProps = {
  width?: number;
  height?: number;
  id: string;
};

const PixelArtPublic: FC<PixelArtCanvasProps> = ({ width, height, id }) => {
  const { user } = useContext(UserContext);
  const toast = useToast();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(true);
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
  const [submitChange, { loading: submitLoading, error: submitError }] = useMutation(CHANGE_PIXEL);

  const [grid, setGrid] = useState<PixelGrid>([]);
  const [color, setColor] = useState<string>('rgb(0, 0, 0)');
  // TODO: testing
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [savePublic, { data: savePublicData, error: savePublicError }] =
    useMutation(SAVE_PUBLIC_CANVAS);
  const { data: colorsData, error: colorsError } = useQuery<any>(LOAD_PUBLIC_CANVAS, {
    variables: { input: id },
  });
  const [loadedColors, setLoadedColors] = useState<string>();

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

  useEffect(() => {
    if (!colorsData) {
      if (typeof window !== 'undefined') setLoading(false);
      return;
    }
    setLoadedColors(colorsData.loadCanvas as string);
  }, [colorsData]);

  useEffect(() => {
    createGrid();

    if (!loadedColors) {
      if (typeof window !== 'undefined') setLoading(false);
      return;
    }
    loadGrid();
    setLoading(false);
  }, [createGrid, loadGrid, loadedColors]);

  const [scale, setScale] = useState(0.15);
  const [mouseOver, setMouseOver] = useState(false);
  const minScale = 0.1;

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
    if (pixel.style.backgroundColor !== color) {
      pixel.style.backgroundColor = color;
    }
    await updatePixel(pixel, color, row, col);
  };

  const updatePixel = async (
    pixel: EventTarget & HTMLDivElement,
    color: string,
    row: number,
    col: number,
  ) => {
    if (!user.username) {
      toast.closeAll();
      toast({
        title: 'You must be logged in to draw',
        status: 'error',
        duration: 3000,
        isClosable: true,
        variant: 'solid',
      });
      return;
    }

    submitChange({
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
  };

  const handleMouseDown = () => {
    setMouseDown(true);
    setDragging(true);
  };

  const handleMouseMove = (e: any) => {
    if (dragging) {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseUp = (e: any) => {
    setMouseDown(false);
    setDragging(false);
    //if (user.username)
    saveGrid();
  };

  const styles: React.CSSProperties = {
    transform: `
    scale(${scale})`,
    userSelect: 'none',
    overflow: 'hidden',
  };

  return (
    <Flex justifyContent='center' alignContent='center'>
      {loading && <ComponentLoading />}
      <Flex
        ref={ref}
        style={styles}
        id='pixel-grid'
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
        onMouseUp={handleMouseUp}
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
