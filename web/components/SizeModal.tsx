import { useMutation } from '@apollo/client';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useBoolean, useDisclosure } from '@chakra-ui/hooks';
import { Input } from '@chakra-ui/input';
import { VStack } from '@chakra-ui/layout';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/modal';
import { Switch } from '@chakra-ui/switch';
import router from 'next/router';
import { FC, useEffect, useState } from 'react';
import CREATE_CANVAS from '../graphql/mutations/createCanvas';
import { SliderInput } from './SliderInput';

type SizeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SizeModal: FC<SizeModalProps> = ({ isOpen, onClose }) => {
  const [canvasName, setCanvasName] = useState('');
  const [canvas_id, setCanvas_id] = useState('');
  const [
    createCanvas,
    { data: createCanvasData, error: createCanvasError, loading: createCanvasLoading },
  ] = useMutation(CREATE_CANVAS);
  useEffect(() => {
    if (!createCanvasData) {
      return;
    }
    setCanvas_id(createCanvasData.createCanvas.canvas?.canvasId!);
    router.push('canvasCollection/' + createCanvasData.createCanvas.canvas?.canvasId!);
  }, [createCanvasData]);
  const createNewCanvas = async () => {
    try {
      await createCanvas({
        variables: {
          input: {
            name: canvasName,
          },
        },
      });
    } catch {
      console.log(createCanvasError?.message);
      return false;
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size='xs'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Choose Name and Size</ModalHeader>
        <ModalBody>
          <Input
            placeholder='Name of your Canvas'
            type='text'
            value={canvasName}
            variant='filled'
            mb={5}
            onChange={(e) => setCanvasName(e.target.value)}
          />
          <SelectSizeForm />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' onClick={createNewCanvas} width='100%'>
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
        <SliderInput min={2} max={42} step={2} value={height} onChange={setHeight} />
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
      <FormControl display='flex' alignItems='center' justifyContent='space-between'>
        <FormLabel mb='0'>Fix aspect ratio</FormLabel>
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
