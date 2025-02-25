import { Text, Image, HStack, Box } from "@chakra-ui/react"
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.svg'

const PortfolioHeading = () => {
    return (
        <>
            <Text fontFamily='Raleway' color='black' fontWeight='bold' fontSize='2xl' marginY='8'>Hi, I am</Text>
            <Text fontFamily='Raleway' color='black' fontWeight='extrabold' fontSize='5xl' marginY={-3}>Prashant Sharma</Text>
            <Text fontFamily='Raleway' color='#909090' fontWeight='semibold' fontSize='2xl' >Full Stack Software Engineer</Text>
            <HStack marginY={10} spacing={5}>
                <Image src={mail} boxSize={8} boxShadow={4} borderRadius="md" border="2px solid black" padding={1} />
                <Image src={github} boxSize={8} boxShadow={4} borderRadius="md" border="2px solid black" padding={1} />
                <Image src={linkedin} boxSize={8} boxShadow={4} borderRadius="md" border="2px solid black" padding={1} />
            </HStack>
        </>
    )
}

export default PortfolioHeading
