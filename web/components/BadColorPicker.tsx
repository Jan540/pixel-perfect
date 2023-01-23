import {
  Box,
  Button,
  HStack,
  Input,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { ColorChangeHandler, RGBColor } from "react-color";

type ColorPickerProps = {
  onColorChange: ColorChangeHandler;
};

const BadColorPicker: FC<ColorPickerProps> = ({ onColorChange }) => {
  const [color, setColor] = useState("");

  function hexToRgb(hex: string): RGBColor {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result) {
      return {
        r: 255,
        g: 255,
        b: 255,
      };
    }

    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
  }

  const swatches = ["#000000", "#FFFFFF", "#ED333B", "#33D17A", "#3584E4"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    defaultValue: "#000000",
  });

  const group = getRootProps();

  function RadioCard({ color, ...props }: { color: string }) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="2px"
          borderRadius="md"
          boxShadow="md"
          background={color}
          _checked={{
            borderColor: "teal.600",
          }}
          _focus={{
            boxShadowhexToRgb: "outline",
          }}
          px={6}
          py={4}
          onClick={(e) => {
            onColorChange(
              {
                hex: color,
                rgb: hexToRgb(color),
                hsl: { h: 255, s: 255, l: 255 },
              },
              e as any
            );

            setColor(color);
          }}
        ></Box>
      </Box>
    );
  }

  return (
    <Box w="100%">
      <HStack
        spacing={2}
        w="100%"
        {...group}
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {swatches.map((color) => {
          const radio = getRadioProps({ value: color });
          return <RadioCard key={color} {...radio} color={color} />;
        })}
      </HStack>
      <Input
        type="color"
        mt={2}
        value={color}
        onChange={(e) => {
          onColorChange(
            {
              hex: e.target.value,
              rgb: hexToRgb(e.target.value),
              hsl: { h: 255, s: 255, l: 255 },
            },
            e
          );

          setColor(e.target.value);
        }}
      />
    </Box>
  );
};

export default BadColorPicker;
