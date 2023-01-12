import { Flex, Text, Container, VStack, Button, Link } from '@chakra-ui/react';
import { NextPage } from 'next';

const canvasCollection: NextPage = () => {
  return (
    <Flex pt={'150px'} pl={'150px'}>
      <VStack>
        <Text fontSize={'5xl'}>Canvas Collection</Text>
        <Container>
          <Link href='/privatePlace'>
            <Button bgColor={'grey.500'} size='lg' width='300px' height='300px'>
              <Text fontSize={'5xl'}>+</Text>
            </Button>
          </Link>
        </Container>
      </VStack>
    </Flex>
  );
};

export default canvasCollection;
