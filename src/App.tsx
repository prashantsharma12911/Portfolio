import { Box, Button, Flex, GridItem, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ProfileGrid from './components/ProfileGrid'

const App = () => {
  return (
    // <>
    // <Flex width="100%" justifyContent="flex-end" p={4} bg='black'>
    //   <NavBar/>
    // </Flex>
    //   <ProfileGrid/>
    // </>
    <Box borderRadius="0">

      {/* <Text height={100}>IMPLEMENTATION IN PROGRESS</Text> */}
      <ProfileGrid/>

      {/* <Box width='100vw' height='20vh' display='flex'>
        <Box width='100vw' height='10vh' bg='blue'>

        </Box>
        <Box width='100vw' height='10vh' bg='red'>

        </Box>
      </Box> */}

    </Box>
    // <Box bg='black' width='100vw' height='39.07vh'>

    // </Box>
  )
}

export default App
