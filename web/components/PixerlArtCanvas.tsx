import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { CHANGE_PIXEL } from "../graphql/code/changePixel";
import { ON_PIXEL_CHANGE } from "../graphql/code/onPixelChange";
import { PixelGrid } from "../types/PixelArtCanvasTypes";
import { ColorResult, SwatchesPicker } from "react-color";
import SAVE_CANVAS from "../graphql/mutations/saveCanvas";
import LOAD_CANVAS from "../graphql/query/loadCanvas";
import ComponentLoading from "./componentLoading";
import { Box, Flex, Grid, GridItem, useToast } from "@chakra-ui/react";
import DrawingToolbar from "./DrawingToolbar";
import { UserContext } from "../lib/User/Usercontext";

type PixelArtCanvasProps = {
  width?: number;
  height?: number;
  id: string;
};

const PixelArtCanvas: FC<PixelArtCanvasProps> = ({ width, height, id }) => {
  const { user } = useContext(UserContext);
  const toast = useToast();

  const [loading, setLoading] = useState(true);
  const { data, error } = useSubscription(ON_PIXEL_CHANGE, {
    onData: (onChangeData) => {
      if (!onChangeData.data.data) return;
      const { onPixelChange } = onChangeData.data.data;
      if (!onPixelChange) return;
      drawPixelChange(
        onPixelChange!.row,
        onPixelChange!.col,
        onPixelChange!.color
      );
    },
    variables: {
      canvasId: id,
    },
  });
  const [submitChange, { loading: submitLoading, error: submitError }] =
    useMutation(CHANGE_PIXEL);

  const [grid, setGrid] = useState<PixelGrid>([]);
  const [color, setColor] = useState<string>("rgb(0, 0, 0)");
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [saveCanvas, { data: saveData, error: saveError }] =
    useMutation(SAVE_CANVAS);
  const { data: colorsData, error: colorsError } = useQuery<any>(LOAD_CANVAS, {
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
        newGrid[i].push({ color: "rgb(255,255,255)" });
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
        const pixel = document.getElementById(
          `pixel-${i}-${j}`
        ) as HTMLDivElement;
        pixel.style.backgroundColor = colorData[i][j];
        pixel.style.backgroundColor = colorData[i][j];
      }
    }

    setLoading(false);
  }, [loadedColors, width, height]);

  const saveGrid = () => {
    const mainDiv = document.getElementById("pixel-grid") as HTMLDivElement;
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
      saveCanvas({
        variables: { input: { canvas_id: id, colors: JSON.stringify(grid) } },
      });
    } catch {
      console.log("error saving canvas");
    }
  };

  useEffect(() => {
    if (!colorsData) {
      if (typeof window !== "undefined") setLoading(false);
      return;
    }
    setLoadedColors(colorsData.loadCanvas as string);
  }, [colorsData]);

  useEffect(() => {
    createGrid();

    if (!loadedColors) {
      if (typeof window !== "undefined") setLoading(false);
      return;
    }
    loadGrid();
    setLoading(false);
  }, [createGrid, loadGrid, loadedColors]);

  const handleColorChange = (newColor: ColorResult) => {
    setColor(`rgb(${newColor.rgb.r}, ${newColor.rgb.g}, ${newColor.rgb.b})`);
  };

  const handlePixelChange = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    row: number,
    col: number
  ) => {
    let pixel = e.currentTarget;
    await updatePixel(pixel, color, row, col);
  };

  const updatePixel = async (
    pixel: EventTarget & HTMLDivElement,
    color: string,
    row: number,
    col: number
  ) => {
    if (!user.username) {
      toast.closeAll();
      toast({
        title: "You must be logged in to draw",
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "solid",
      });
      return;
    }

    if (pixel.style.backgroundColor === color) return;

    pixel.style.backgroundColor = color;
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
  };

  const handleMouseUp = () => {
    setMouseDown(false);
    if (user.username) saveGrid();
  };

  const handlePixelMouseMove = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    row: number,
    col: number
  ) => {
    if (mouseDown && user.username) {
      updatePixel(e.currentTarget, color, row, col);
    }
  };

  return (
    <Grid
      h="100%"
      w="100%"
      templateAreas={`"navbar navbar"
                      "toolbar canvas"`}
      gridTemplateColumns={"20rem 1fr"}
      gridTemplateRows={"6.25rem 1fr"}
    >
      <GridItem area="toolbar">
        <DrawingToolbar onColorChange={handleColorChange} />
      </GridItem>
      <GridItem
        area="canvas"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        {loading && <ComponentLoading />}
        <Flex
          id="pixel-grid"
          onMouseUp={handleMouseUp}
          onMouseDown={handleMouseDown}
          display={loading ? "none" : "block"}
        >
          {grid.map((row, i) => (
            <div key={i} style={{ display: "flex" }}>
              {row.map((pixel, j) => (
                <div
                  id={`pixel-${i}-${j}`}
                  key={j}
                  style={{
                    width: 25,
                    height: 25,
                    backgroundColor: pixel.color,
                    cursor: "crosshair",
                  }}
                  onClick={(e) => handlePixelChange(e, i, j)}
                  onMouseMove={(e) => handlePixelMouseMove(e, i, j)}
                />
              ))}
            </div>
          ))}
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default PixelArtCanvas;
