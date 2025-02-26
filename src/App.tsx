import { Box, Button, Flex, Grid, GridItem, HStack, Show, SimpleGrid, Text } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ProfileGrid from './components/ProfileGrid'
import ProfileSmallDevice from './components/ProfileSmallDevice'

const App = () => {
  return (

    <Box>
      <Show below="md">
          <ProfileSmallDevice/>
      </Show>

      <Show above="md" >
        {/* <Box w='100vw' h='100vh' position='absolute' overflowX='hidden'> */}

        <ProfileGrid />
        <Box h='70vh'></Box> 
        {/* height calculations are from top so we need to fix it */}
        <Box w='100vw' h='120vh' bg='gray.600'>
          <Text>About myself</Text>
        </Box>
        
      </Show>




    </Box>
  )
}

export default App
