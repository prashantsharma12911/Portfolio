import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import sharma_image from '../assets/sharma.jpeg'

const PortfolioImage = () => {
  return (
    <Box width={350} height={350} position='relative' top={10}>
        <Image src={sharma_image} transform='rotate(-9.78deg'/>
    </Box>

  )
}

export default PortfolioImage
