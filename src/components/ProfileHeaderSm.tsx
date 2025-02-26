import { Box, Image, Text, HStack, Grid, SimpleGrid, GridItem, Flex } from '@chakra-ui/react'
import React from 'react'
import sharma from '../assets/sharma.jpeg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.svg'
const ProfileHeaderSm = () => {
    return (
        <Box display='flex' >
            <Box w='70vw' h='30vh' display='flex' flexDirection='column' justifyContent='center'>
                 <Text fontFamily='Raleway' color='white' fontWeight='bold'  >Hi, I am</Text>
             <Text as='span' marginX={2} fontFamily='Raleway' color='white' fontWeight='extrabold' fontSize='3xl' >Prashant Sharma</Text>
            <Text fontFamily='Raleway' color='white' fontWeight='semibold'  >Full Stack Software Engineer</Text>

            </Box>
            <Box w='30vw' h='30vh'  display="flex" flexDirection="column" gap={5}  >
                     <Image src={mail} bg='white'  borderRadius="full" overflow="hidden" boxSize={10} boxShadow={4}  border="1px solid black"  />
                 <Image src={github} boxSize={10} boxShadow={4} borderRadius="full" overflow="hidden" border="1px solid black"  />
                <Image src={linkedin} boxSize={10} boxShadow={4} borderRadius="full" overflow="hidden" border="1px solid black"  />

            </Box>
        </Box>
    )
}

export default ProfileHeaderSm
