import { Flex } from "@chakra-ui/layout";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/number-input";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/slider";
import { FC } from "react";

type SliderInputProps = {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
};

export const SliderInput: FC<SliderInputProps> = ({
  min,
  max,
  step,
  value,
  onChange,
}) => {
  return (
    <Flex>
      <NumberInput
        maxW="100px"
        mr="2rem"
        value={value}
        onChange={(_: string, value: number) => onChange(value)}
        min={min ? min : 0}
        max={max ? max : 100}
        step={step ? step : 1}
        variant="filled"
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={(value: number) => onChange(value)}
        min={min ? min : 0}
        max={max ? max : 100}
        step={step ? step : 1}
        variant="filled"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  );
};
