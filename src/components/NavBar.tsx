import { Box, Button, GridItem, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    displayVertical: boolean;
    setExpanded?: () => void;
    expanded?: boolean;
}
const NavBar = ({ displayVertical, expanded }: Props) => {
    const navTexts = ['About me', 'Skills', 'Home'];

    if (displayVertical) {
        if (expanded) {
            return (
                <Box>
                    <VStack>
                        {navTexts.map(text => <Text fontFamily="Montserrat" fontWeight="bold" fontSize="md" whiteSpace='nowrap' >{text}</Text>)}
                        <Button bg='white' color='black' fontWeight="bold" fontSize="md">CONTACT ME</Button>
                    </VStack>
                </Box>
            );
        }else{
            return;
        }
    }
    return (
        <Box >
            <HStack spacing={5}  >
                {navTexts.map(text => <Text fontFamily="Montserrat" fontWeight="bold" fontSize="md" whiteSpace='nowrap' >{text}</Text>)}
                <Button bg='white' color='black' fontWeight="bold" fontSize="md">CONTACT ME</Button>
            </HStack>
        </Box>
    );
}

export default NavBar;
