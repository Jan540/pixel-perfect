import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  Flex,
  Text,
  Container,
  VStack,
  Button,
  Link,
  HStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import CREATE_CANVAS from "../../graphql/mutations/createCanvas";
import { useRouter } from "next/router";
import GET_CANVAS from "../../graphql/query/getCanvas";
import { TCanvas } from "../../lib/Canvas/canvas";

import { getAccessToken } from "../../lib/User/acesstoken";

const CanvasCollection: NextPage = () => {
  const router = useRouter();

  const [
    createCanvas,
    {
      data: createCanvasData,
      error: createCanvasError,
      loading: createCanvasLoading,
    },
  ] = useMutation(CREATE_CANVAS);
  const [canvas_id, setCanvas_id] = useState("");
  const [
    fetchCanvases,
    { data: canvasData, error: canvasError, loading: canvasLoading },
  ] = useLazyQuery(GET_CANVAS);
  const [canvases, setCanvases] = useState<TCanvas[]>([]);
  const [oldToken, setOldToken] = useState("");

  const createNewCanvas = async () => {
    try {
      await createCanvas({
        variables: {},
      });
    } catch {
      console.log(createCanvasError?.message);
      return false;
    }
  };

  useEffect(() => {
    if (getAccessToken() !== oldToken) {
      fetchCanvases();
      setOldToken(getAccessToken());
    }
  }, [getAccessToken()]);

  useEffect(() => {
    if (!createCanvasData) {
      return;
    }
    setCanvas_id(createCanvasData.createCanvas.canvas?.canvasId!);
    router.push(
      "canvasCollection/" + createCanvasData.createCanvas.canvas?.canvasId!
    );
  }, [createCanvasData, router]);

  useEffect(() => {
    if (!canvasData) {
      return;
    }
    setCanvases(canvasData.getCanvas as TCanvas[]);
  }, [canvasData]);

  return (
    <>
      <Flex pt={"150px"} pl={"150px"}>
        <VStack>
          <>
            <Text fontSize={"5xl"}>Canvas Collection</Text>
            {
              /* show all canvases as a container */
              canvases.map((canvas) => {
                return (
                  <Link
                    key={canvas.canvasId}
                    href={"canvasCollection/" + canvas.canvasId}
                  >
                    <Button
                      bgColor={"grey.500"}
                      size="lg"
                      width="300px"
                      height="50px"
                    >
                      <Text>{canvas.canvasId}</Text>
                    </Button>
                  </Link>
                );
              })
            }
            <Container>
              <Button
                onClick={createNewCanvas}
                bgColor={"grey.500"}
                size="lg"
                width="300px"
                height="300px"
              >
                <Text fontSize={"5xl"}>+</Text>
              </Button>
            </Container>
          </>
        </VStack>
      </Flex>
    </>
  );
};

export default CanvasCollection;
