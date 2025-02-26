import { Text, Image, HStack, Box, Icon, Tooltip, useClipboard, Alert, AlertDescription, AlertTitle, useToast, Link } from "@chakra-ui/react"
import { SiMaildotru as mail } from "react-icons/si"
import { FaGithub as github } from "react-icons/fa";
import { TiSocialLinkedinCircular as linkedin } from "react-icons/ti";

const PortfolioHeading = () => {
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
        <>
            <Text fontFamily='Raleway' color='black' fontWeight='bold' fontSize='2xl' marginY='8'>Hi, I am</Text>
            <Text fontFamily='Raleway' color='black' fontWeight='extrabold' fontSize='5xl' marginY={-3}>Prashant Sharma</Text>
            <Text fontFamily='Raleway' color='#909090' fontWeight='semibold' fontSize='2xl' >Full Stack Software Engineer</Text>
            <HStack marginY={10} spacing={10}>
                <Icon as={mail} boxSize={10} boxShadow={4} cursor='pointer' onClick={() => { mailClickAction() }} />
                <Link href='https://github.com/prashantsharma12911' isExternal>

                    <Icon as={github} boxSize={10} boxShadow={4} cursor='pointer' />

                </Link>

                <Link href='https://www.linkedin.com/in/prashant-kumar-5497a116a/' isExternal>
                    <Icon as={linkedin} boxSize={14} boxShadow={4} cursor='pointer' />

                </Link>

            </HStack>
        </>
    )
}

export default PortfolioHeading
