import { Box, Button, GridItem, HStack, SimpleGrid, Text } from "@chakra-ui/react";

const NavBar = () => {
    const navTexts = ['About me', 'Skills', 'Home'];

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
