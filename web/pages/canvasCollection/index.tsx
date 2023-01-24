import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import {
  Flex,
  Text,
  Container,
  VStack,
  Button,
  Link,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import CREATE_CANVAS from '../../graphql/mutations/createCanvas';
import { useRouter } from 'next/router';
import GET_CANVAS from '../../graphql/query/getCanvas';
import { TCanvas } from '../../lib/Canvas/canvas';

import { getAccessToken } from '../../lib/User/acesstoken';
import { SizeModal } from '../../components/SizeModal';

const CanvasCollection: NextPage = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [fetchCanvases, { data: canvasData, error: canvasError, loading: canvasLoading }] =
    useLazyQuery(GET_CANVAS);
  const [canvases, setCanvases] = useState<TCanvas[]>([]);
  const [oldToken, setOldToken] = useState('');

  useEffect(() => {
    if (getAccessToken() !== oldToken) {
      fetchCanvases();
      setOldToken(getAccessToken());
    }
  }, [fetchCanvases, oldToken]);

  useEffect(() => {
    if (!canvasData) {
      return;
    }
    setCanvases(canvasData.getCanvas as TCanvas[]);
  }, [canvasData]);

  return (
    <>
      <Flex pt={'150px'} pl={'150px'}>
        <VStack>
          <>
            <SizeModal isOpen={isOpen} onClose={onClose} />
            <Text fontSize={'5xl'}>Canvas Collection</Text>
            <HStack>
              {
                /* show all canvases as a container */
                canvases.map((canvas) => {
                  console.log(canvas);
                  return (
                    <Link key={canvas.canvasId} href={'canvasCollection/' + canvas.canvasId}>
                      <Button bgColor={'grey.500'} size='lg' width='300px' height='300px'>
                        <Text>{canvas.name}</Text>
                      </Button>
                    </Link>
                  );
                })
              }
              <Button onClick={onOpen} bgColor={'grey.500'} size='lg' width='300px' height='300px'>
                <Text fontSize={'5xl'}>+</Text>
              </Button>
            </HStack>
          </>
        </VStack>
      </Flex>
    </>
  );
};

export default CanvasCollection;
