import { NextPage } from "next";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import PixelArtCanvas from "../../components/PixerlArtCanvas";
import { SizeModal } from "../../components/SizeModal";

const PrivatePlace: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Box
        height="100vh"
        width="100vw"
      >
        <PixelArtCanvas width={32} height={32} id={id as string} />
      </Box>
      {/*<SizeModal />*/}
    </>
  );
};

export default PrivatePlace;
