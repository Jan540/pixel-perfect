import { useMutation, useQuery } from '@apollo/client';
import { Flex, Text, Container, VStack, Button, Link, HStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import CREATE_CANVAS from '../../graphql/mutations/createCanvas';
import { useRouter } from 'next/router';
import GET_CANVAS from '../../graphql/query/getCanvas';
import { TCanvas } from '../../lib/Canvas/canvas';
import { cp } from 'fs/promises';
import { getAccessToken } from '../../lib/User/acesstoken';

const canvasCollection: NextPage = () => {
  const router = useRouter();

  const [createCanvas, { data, error, loading }] = useMutation(CREATE_CANVAS);
  const [canvas_id, setCanvas_id] = useState('');
  const { data: canvasData, error: canvasError, loading: canvasLoading, refetch: canvasRefetch } = useQuery(GET_CANVAS);
  const [canvases, setCanvases] = useState<TCanvas[]>([]);
  const [oldToken, setOldToken] = useState<string | null>(null);

  const createNewCanvas = async () => {
    try {
      await createCanvas({
        variables: {},
      });
    } catch {
      console.log(error?.message);
      return false;
    }
  };
  
  useEffect(() => {
    if (oldToken === getAccessToken()) {
      return;
    }
    setOldToken(getAccessToken());
    canvasRefetch();
  }, [getAccessToken()]);
  
  useEffect(() => {
    if (!data) {
      return;
    }
    setCanvas_id(data.createCanvas.canvas_Model?.canvas_id!);
    router.push('canvasCollection/' + data.createCanvas.canvas_Model?.canvas_id!);
  }, [data]);
  
  useEffect(() => {
    if (!canvasData) {
      return;
    }
    setCanvases(canvasData.getCanvas as TCanvas[]);
  }, [canvasData]);


  return (
    <>
      <Flex pt={'150px'} pl={'150px'}  >
        <VStack>
          <>
            <Text fontSize={'5xl'}>Canvas Collection</Text>
              {
                /* show all canvases as a container */
                canvases.map((canvas) => {
                  return (
                    <Link href={'canvasCollection/' + canvas.canvas_id}>
                      <Button bgColor={'grey.500'} size='lg' width='300px' height='50px'>
                        <Text>{canvas.canvas_id}</Text>
                      </Button>
                    </Link>
                  );
                })
              }
              <Container>
                <Button
                  onClick={createNewCanvas}
                  bgColor={'grey.500'}
                  size='lg'
                  width='300px'
                  height='300px'
                >
                  <Text fontSize={'5xl'}>+</Text>
                </Button>
              </Container>
          </>
        </VStack>
      </Flex>
    </>
  );
};

export default canvasCollection;
