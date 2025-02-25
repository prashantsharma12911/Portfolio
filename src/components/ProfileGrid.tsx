import { Box, GridItem, HStack, Icon, IconButton, SimpleGrid, Text, Image } from '@chakra-ui/react';
import NavBar from './NavBar';
import { useEffect } from 'react';
import PortfolioImage from './PortfolioImage';
import PortfolioHeading from './PortfolioHeading';


const ProfileGrid = () => {
  return (
    <Box w='100vw' h='70vh' overflow='hidden' position='absolute'>
        <Box
          w="50vw"
          h="520px"
          bg="#D7D7D7"
          color="white"
          borderRadius="md"
          boxShadow="md"

          position='absolute'
        >
          <Box marginX={40} marginY={150}>
            <PortfolioHeading />
          </Box>
        </Box>
        <Box
          w="70vw"
          h="750px"
          bg="black"
          borderRadius="md"
          boxShadow="md"
          position="absolute"
          top='-10vh'
          left={"40vw"}
          transform="rotate(9.78deg)"
          overflow='hidden'
        >
          <Box top={40} position='absolute' transform='rotate(-9.78deg)' left={20}>
            <NavBar />
            <PortfolioImage />
          </Box>
        </Box>
        {/* <Box width='100vw' height='200vh' bg='red' zIndex={2} top={20} position='absolute'/> */}
    </Box>
  );
};

export default ProfileGrid;
