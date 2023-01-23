import { Box, Flex, Input } from "@chakra-ui/react";
import { FC } from "react";
import { ColorChangeHandler, SwatchesPicker } from "react-color";
import BadColorPicker from "./BadColorPicker";

type DrawingToolbarProps = {
  onColorChange: ColorChangeHandler;
};

const DrawingToolbar: FC<DrawingToolbarProps> = ({ onColorChange }) => {
  return (
    <Flex h="100%" w="100%" p={2} justifyContent="center" alignItems="center">
      <BadColorPicker onColorChange={onColorChange} />
    </Flex>
  );
};

export default DrawingToolbar;
