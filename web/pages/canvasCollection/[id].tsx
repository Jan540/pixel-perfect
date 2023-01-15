import { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import PixelArtCanvas from "../../components/PixerlArtCanvas";
import { SizeModal } from "../../components/SizeModal";

const privatePlace: NextPage = () => {
  const router = useRouter();
  const { id } = router.query; 
  
  return (
    <>
      <Flex justifyContent='center' alignItems='center' height='100vh' width='100vw'>
        <PixelArtCanvas width={32} height={32} id={id as string} />
      </Flex>
      {/*<SizeModal />*/}
    </>
  );
};

export default privatePlace;
