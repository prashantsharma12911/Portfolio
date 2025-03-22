import { Box ,HStack , Text } from '@chakra-ui/react'
import React from 'react'

const DesignDevMain = () => {
  return (
    <Box>
    <HStack paddingY={10}
    paddingX={20}
    spacing={10}
    align="start"
    justify="center"
    width="100vw" >
    <Box>
      <Text fontWeight='bold' fontSize='4xl'> Design</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti numquam aspernatur odit ex commodi quisquam quam fugiat cum sed ullam ut facilis nemo culpa fuga magnam alias dolores voluptatibus!</Text>
    </Box>
    <Box>
      <Text fontWeight='bold' fontSize='4xl'> Develop </Text>
      <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab consectetur nisi ratione, ullam eum nihil commodi asperiores beatae ad optio aliquam praesentium vitae nesciunt natus, odio quo officia voluptates.</Text>
    </Box>
  </HStack>
  <Box display='flex' justifyContent="center"
    width="100vw"
  >
    <Box w='40vw'>
      <Text fontWeight='bold' fontSize='4xl'>Maintenance</Text>
      <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab consectetur nisi ratione, ullam eum nihil commodi asperiores beatae ad optio aliquam praesentium vitae nesciunt natus, odio quo officia voluptates.</Text>
    </Box>
  </Box>
  </Box>
  )
}

export default DesignDevMain
