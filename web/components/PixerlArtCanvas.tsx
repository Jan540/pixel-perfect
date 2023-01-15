import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { FC, useCallback, useEffect, useState } from 'react';
import { CHANGE_PIXEL } from '../graphql/code/changePixel';
import { ON_PIXEL_CHANGE } from '../graphql/code/onPixelChange';
import { PixelGrid } from '../types/PixelArtCanvasTypes';
import { ColorResult, SwatchesPicker } from 'react-color';
import SAVE_CANVAS from '../graphql/mutations/saveCanvas';
import LOAD_CANVAS from '../graphql/query/loadCanvas';

type PixelArtCanvasProps = {
  width?: number;
  height?: number;
  id: string;
};

const PixelArtCanvas: FC<PixelArtCanvasProps> = ({ width, height, id }) => {
  const { data, error } = useSubscription(ON_PIXEL_CHANGE, {
    onData: (onChangeData) => {
      if (!onChangeData.data.data) return;
      const { onPixelChange } = onChangeData.data.data;
      drawPixelChange(onPixelChange.row, onPixelChange.col, onPixelChange.color);
    },
  });
  const [submitChange, { loading, error: submitError }] = useMutation(CHANGE_PIXEL);

  const [grid, setGrid] = useState<PixelGrid>([]);
  const [color, setColor] = useState<string>('rgb(0, 0, 0)');
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [saveCanvas, { data: saveData, error: saveError }] = useMutation(SAVE_CANVAS);
  const [savedGrid, setSavedGrid] = useState<any>();
  const { data: colorsData, error: colorsError } = useQuery<any>(LOAD_CANVAS, { variables: { input: id }});
  const [loadedColors, setLoadedColors] = useState<string>();

  const drawPixelChange = (row: number, col: number, color: string) => {
    const pixel = document.getElementById(`pixel-${row}-${col}`);
    if (!pixel) return;

    if (pixel.style.backgroundColor !== color) {
      pixel.style.backgroundColor = color;
    }
  };
  // load function on page load

  const createGrid = () => {
    const newGrid: PixelGrid = [];
    for (let i = 0; i < height!; i++) {
      newGrid.push([]);
      for (let j = 0; j < width!; j++) {
        newGrid[i].push({ color: 'rgb(255,255,255)' });
      }
    }
    setGrid(newGrid);
  };

  useEffect(() => {
    if (!colorsData) {
      return;
    }
    setLoadedColors(colorsData.loadCanvas as string);
    console.log(colorsData);
  }, [colorsData]);

  useEffect(() => {
    createGrid();
  }, []);
  useEffect(() => {
    if (!loadedColors) {
      return;
    }
    loadGrid();
  }, [loadedColors]);

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
      console.log(id, grid);
      saveCanvas({
        variables: { input: { canvas_id: id, colors: JSON.stringify(grid) } },
      });
    } catch {
      console.log('error saving canvas');
    }
  };

  const loadGrid = () => {
    const colorData = JSON.parse(loadedColors!);
    console.log(colorData);
    // TODO: maybe change?
    for (let i = 0; i < width!; i++) {
      for (let j = 0; j < height!; j++) {
        const pixel = document.getElementById(`pixel-${i}-${j}`) as HTMLDivElement;
        pixel.style.backgroundColor = colorData[i][j];
        pixel.style.backgroundColor = colorData[i][j];
      }
    }
  };

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
    if (pixel.style.backgroundColor === color) return;

    pixel.style.backgroundColor = color;
    await submitChange({
      variables: {
        input: {
          payload: {
            row,
            col,
            color,
          },
        },
      },
    });
  };

  const handleMouseDown = () => {
    setMouseDown(true);
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handlePixelMouseMove = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    row: number,
    col: number,
  ) => {
    if (mouseDown) {
      await updatePixel(e.currentTarget, color, row, col);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SwatchesPicker onChangeComplete={handleColorChange} />

      <button
        onClick={(e) => {
          saveGrid();
        }}
      >
        Save Grid
      </button>
      <button
        onClick={(e) => {
          loadGrid();
        }}
      >
        Load Grid
      </button>
      <div id='pixel-grid' onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
        {grid.map((row, i) => (
          <div key={i} style={{ display: 'flex' }}>
            {row.map((pixel, j) => (
              <div
                id={`pixel-${i}-${j}`}
                key={j}
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: pixel.color,
                  cursor: 'crosshair',
                }}
                onClick={(e) => handlePixelChange(e, i, j)}
                onMouseMove={(e) => handlePixelMouseMove(e, i, j)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PixelArtCanvas;
