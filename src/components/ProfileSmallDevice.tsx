import { Box, Image, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import sharma from '../assets/sharma.jpeg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.svg'
import ProfileHeaderSm from './ProfileHeaderSm'

const ProfileSmallDevice = () => {
    return (
        <Box position='relative' h='100vh' w='100vw'  >
            <Box>
                <Image w='100vw' h='100vh' src={sharma} marginY={4}></Image>
            </Box>
            <Box w='120vw' h='40vh' bg='gray.900' position='relative' transform='rotate(-15deg)' top='-35vh' opacity={0.7}>
            </Box>
            <Box position='relative' top='-70vh' left={10}  >
            <ProfileHeaderSm/>
            </Box>
        </Box>
    )
}

export default ProfileSmallDevice
