import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useBoolean, useDisclosure } from "@chakra-ui/hooks";
import { Divider, VStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
import { Switch } from "@chakra-ui/switch";
import { FC, useState } from "react";
import { SliderInput } from "./SliderInput";

export const SizeModal: FC = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: false });
  return (
    <Modal
      closeOnOverlayClick={false}
      closeOnEsc={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="xs"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Choose size</ModalHeader>
        <ModalBody>
          <SelectSizeForm />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose} width="100%">
            Create canvas
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const SelectSizeForm = () => {
  const [height, setHeight] = useState(32);
  const [width, setWidth] = useState(32);
  const [fixAspect, setFixAspect] = useBoolean(false);

  return (
    <VStack spacing={5}>
      <FormControl>
        <FormLabel>Height</FormLabel>
        <SliderInput
          min={2}
          max={42}
          step={2}
          value={height}
          onChange={setHeight}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Width</FormLabel>
        <SliderInput
          min={2}
          max={42}
          step={2}
          value={fixAspect ? height : width}
          onChange={fixAspect ? setHeight : setWidth}
        />
      </FormControl>
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <FormLabel mb="0">Fix aspect ratio</FormLabel>
        <Switch
          isChecked={fixAspect}
          onChange={() => {
            setWidth(height);
            setFixAspect.toggle();
          }}
        />
      </FormControl>
    </VStack>
  );
};
