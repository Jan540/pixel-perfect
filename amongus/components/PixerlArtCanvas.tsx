import { useMutation, useSubscription } from "@apollo/client";
import { FC, useCallback, useEffect, useState } from "react";
import { CHANGE_PIXEL } from "../graphql/code/changePixel";
import { ON_PIXEL_CHANGE } from "../graphql/code/onPixelChange";
import { PixelGrid } from "../types/PixelArtCanvasTypes";
import { ColorResult, SwatchesPicker } from "react-color";

type PixelArtCanvasProps = {
  width?: number;
  height?: number;
};

const PixelArtCanvas: FC<PixelArtCanvasProps> = ({ width, height }) => {
  const { data, error } = useSubscription(ON_PIXEL_CHANGE);
  const [submitChange, { loading, error: submitError }] =
    useMutation(CHANGE_PIXEL);

  const [grid, setGrid] = useState<PixelGrid>([]);
  const [color, setColor] = useState<string>("green");
  const [mouseDown, setMouseDown] = useState<boolean>(false);

  const drawPixelChange = useCallback(
    (row: number, col: number, color: string) => {
      const newGrid: PixelGrid = [...grid];
      newGrid[row][col] = { color };
      setGrid(newGrid);
    },
    [grid]
  );

  useEffect(() => {
    if (data) {
      drawPixelChange(
        data.onPixelChange.row,
        data.onPixelChange.col,
        data.onPixelChange.color
      );
    }
  }, [drawPixelChange, data]);

  const createGrid = () => {
    const newGrid: PixelGrid = [];
    for (let i = 0; i < height!; i++) {
      newGrid.push([]);
      for (let j = 0; j < width!; j++) {
        newGrid[i].push({ color: "white" });
      }
    }
    setGrid(newGrid);
  };

  const handleColorChange = (newColor: ColorResult) => {
    setColor(newColor.hex);
  };

  const handlePixelChange = async (row: number, col: number) => {
    drawPixelChange(row, col, color);
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

  const handlePixelMouseEnter = (row: number, col: number) => {
    if (mouseDown) {
      handlePixelChange(row, col);
    }
  };

  return (
    <div>
      <SwatchesPicker onChangeComplete={handleColorChange} />
      <div>
        <button onClick={createGrid}>Create Grid</button>
      </div>
      <div onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
        {grid.map((row, i) => (
          <div key={i} style={{ display: "flex" }}>
            {row.map((pixel, j) => (
              <div
                key={j}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: pixel.color,
                  cursor: "crosshair",
                }}
                onClick={() => handlePixelChange(i, j)}
                onMouseMove={() => handlePixelMouseEnter(i, j)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PixelArtCanvas;
