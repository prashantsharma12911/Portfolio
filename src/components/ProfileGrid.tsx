import { Box, GridItem, HStack, Icon, IconButton, SimpleGrid, Text , Image } from '@chakra-ui/react';
import NavBar from './NavBar';
import { useEffect } from 'react';
import PortfolioImage from './PortfolioImage';
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.svg'

const ProfileGrid = () => {
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);

  return (
    <Box overflow='hidden' borderRadius="0">
         {/* <Box  borderRadius="0"> */}

      <Box 
        w="100vw" 
        h="70vh" 
        bg="#D7D7D7" 
        color="white" 
        display="flex" 
        // alignItems="center" 
        // justifyContent="center" 
        borderRadius="md" 
        boxShadow="md"
        // position="absolute"
        top={10}
        left={0}
      >
        <Box marginX={40} marginY={150}>
        <Text  fontFamily='Raleway' color='black' fontWeight='bold' fontSize='2xl' marginY='8'>Hi, I am</Text>
        <Text fontFamily='Raleway' color='black' fontWeight='extrabold' fontSize='5xl' marginY={-3}>Prashant Sharma</Text>
        <Text fontFamily='Raleway' color='#909090' fontWeight='semibold' fontSize='2xl' >Full Stack Software Engineer</Text>
        <HStack marginY={10} spacing={5}>
        <Image src={mail} boxSize={8} boxShadow={4} borderRadius="md" border="2px solid black" padding={1}/>
        <Image src={github} boxSize={8} boxShadow={4} borderRadius="md" border="2px solid black" padding={1}/>
        <Image src={linkedin} boxSize={8} boxShadow={4} borderRadius="md" border="2px solid black" padding={1}/>
        </HStack>
        </Box>
       
        
      </Box>
      <Box 
        w="94vw" 
        h="105vh" 
        bg="black" 
        // display="flex" 
        // alignItems="center" 
        // justifyContent="flex-start" 
        borderRadius="md" 
        // zIndex={1}
        boxShadow="md"
        position="relative"
        top={'-75vh'}
        left={"45vw"}
        transform="rotate(9.78deg)"
        overflow='hidden'
        // border='2px solid red'
      >
        <Box top={10} position='relative' transform='rotate(-9.78deg)' left={10}>
        <NavBar/>
        <PortfolioImage/>
        </Box>
      </Box>
      <Box width='100vw' height='30vh' bg='gray.600' zIndex={10} position='relative' top='-104.9vh'/>
    </Box>
  );
};

export default ProfileGrid;
