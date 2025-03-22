import { Box, Button, Flex, Grid, GridItem, HStack, Show, SimpleGrid, Text } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ProfileGrid from './components/ProfileGrid'
import ProfileSmallDevice from './components/ProfileSmallDevice'
import About from './components/About'
import Skills from './components/Skills'
import DesignDevMain from './components/DesignDevMain'
import Contact from './components/Contact'

const App = () => {

  const about = "I am a dynamic and innovative Software Engineer with 3+ years of experience " +
    "in designing, developing, and maintaining high-performance applications. Since June 2021, " +
    "I have been actively driving innovation at Country Delight, where I specialize " +
    "in developing key features for chatbots and complaint management systems using Java, " +
    "Spring Boot, and cutting-edge AI technologies. My expertise lies in backend development, " +
    "API design, and system architecture, ensuring that applications are scalable, efficient, " +
    "and maintainable. I have a deep understanding of microservices, RESTful APIs, and database " +
    "management, enabling me to build robust solutions that handle large-scale operations seamlessly. " +
    "Beyond backend development, I have a keen interest in Natural Language Processing (NLP) " +
    "and Machine Learning (ML), integrating AI-driven capabilities into applications to enhance " +
    "automation and user engagement. I am particularly passionate about query classification, " +
    "chatbot development, and intelligent data processing, continuously exploring innovative ways " +
    "to improve system performance and user experience. On the frontend, I work with React " +
    "to develop interactive and user-friendly interfaces that complement the backend systems. " +
    "My full-stack expertise allows me to bridge the gap between frontend and backend, ensuring " +
    "smooth and efficient application functionality. I strongly believe in clean code, scalable " +
    "architectures, and continuous learning. Whether it’s optimizing existing systems, designing " +
    "a new feature from scratch, or contributing to open-source projects, I am always looking " +
    "for ways to push the boundaries of software development. Let’s connect and build " +
    "cutting-edge solutions together! ";

  return (

    <Box>
      <Show below="md">
        <ProfileSmallDevice />
      </Show>

      <Show above="md" >
        {/* <Box w='100vw' h='100vh' position='absolute' overflowX='hidden'> */}

        <ProfileGrid />
        <Box h='70vh'></Box>
        {/* height calculations are from top so we need to fix it */}
        </Show>
        <Box bg='blackAlpha.500' padding={5}>
          <About description={about} limit={400} />
        </Box>

        <Box width='100vw' display="flex" justifyContent="center" marginY={10} >
          <Text borderLeft="4px solid black"
            borderRight="4px solid black"
            bg="white"
            color='black' fontWeight='bold' marginX={3} marginY={3} paddingX={4} >Explore</Text>
        </Box>

        <DesignDevMain/>
        <Skills/>
        <Contact/>

        <Box h={40}></Box>

      




    </Box>
  )
}

export default App
