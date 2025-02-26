import { Box, Image, Text, HStack, Grid, SimpleGrid, GridItem, Flex, Icon, Link, useToast, useClipboard } from '@chakra-ui/react'
import React from 'react'
import sharma from '../assets/sharma.jpeg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import { SiMaildotru } from "react-icons/si"
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";


const ProfileHeaderSm = () => {

    const gmail = "prashant.kumar.12911@gmail.com";
    const toast = useToast()
    const { onCopy } = useClipboard(gmail);


    const mailClickAction = () => {
        onCopy();
        toast({
            title: 'Mail copied.',
            status: 'success',
            duration: 1000,
            isClosable: true,
        });
    };


    return (
        <Box display='flex' >
            <Box w='70vw' h='30vh' display='flex' flexDirection='column' justifyContent='center'>
                <Text fontFamily='Raleway' color='white' fontWeight='bold'  >Hi, I am</Text>
                <Text as='span' marginX={2} fontFamily='Raleway' color='white' fontWeight='extrabold' fontSize='3xl' >Prashant Sharma</Text>
                <Text fontFamily='Raleway' color='white' fontWeight='semibold'  >Full Stack Software Engineer</Text>

            </Box>
            <Box w='30vw' h='30vh' display="flex" flexDirection="column" gap={5}  >
                <Icon as={SiMaildotru} boxSize={10} cursor='pointer' onClick={() => mailClickAction()} />
                <Link href='https://github.com/prashantsharma12911' isExternal>
                    <Icon as={FaGithub} boxSize={10} />
                </Link>
                <Link href='https://www.linkedin.com/in/prashant-kumar-5497a116a/' isExternal>
                    <Icon as={TiSocialLinkedinCircular} boxSize={10} />

                </Link>

            </Box>
        </Box>
    )
}

export default ProfileHeaderSm
