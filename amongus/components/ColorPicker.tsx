import {FC} from "react";

import {Button, ButtonGroup, Container} from "@chakra-ui/react";

export const ColorPicker: FC = () => {
    return (
        <Container>
        <ButtonGroup>
            <Button bg="red"></Button>
            <Button bg="blue"></Button>
            <Button bg="green"></Button>
            <Button bg="yellow"></Button>
            <Button bg="purple"></Button>
            <Button bg="pink"></Button>
            <Button bg="black"></Button>
            <Button bg="white"></Button>
        </ButtonGroup>
        </Container>
    );
    };