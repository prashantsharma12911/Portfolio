import { Box, GridItem, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import NavBar from './NavBar';
import { useEffect } from 'react';

const ProfileGrid = () => {
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);

  return (
    <Box overflow='hidden' borderRadius="0">
      <Box 
        w="100vw" 
        h="70vh" 
        bg="#D7D7D7" 
        color="white" 
        // display="flex" 
        // alignItems="center" 
        // justifyContent="center" 
        borderRadius="md" 
        boxShadow="md"
        // position="absolute"
        top={10}
        left={0}
      >
      </Box>
      <Box 
        w="94vw" 
        h="105vh" 
        bg="black" 
        display="flex" 
        // alignItems="center" 
        // justifyContent="flex-start" 
        borderRadius="md" 
        // zIndex={1}
        boxShadow="md"
        position="relative"
        top={'-75vh'}
        left={"40vw"}
        transform="rotate(9.78deg)"
        overflow='hidden'
        // border='2px solid red'
      >
        <NavBar/>
      </Box>
      <Box width='100vw' height='30vh' bg='gray.600' zIndex={10} position='relative' top='-104.9vh'/>
    </Box>
  );
};

export default ProfileGrid;
