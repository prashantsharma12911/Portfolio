import { Box, Icon, SimpleGrid, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons';
import { SiSpringboot } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaAndroid } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";







const Skills = () => {
    const skills : IconType[] = [SiSpring,SiSpringboot , FaJava , SiMysql , FaAws , TbBrandJavascript , TiHtml5 , IoLogoCss3 , FaGithub , FaFigma ,FaLaptopCode , FaReact ];
    const learning : IconType[] = [FaAndroid , DiMongodb , RiFlutterFill ]
    return (
        <Box id='skills'>
            <Box display='flex' justifyContent='center' paddingY={10}>
                <Text border="4px solid black" fontWeight='bold' fontSize='4xl' paddingX={8} _hover={{
                    bg: "black",  // Changes background color on hover
                    transform: "scale(1.05)", // Slight zoom effect
                    boxShadow: "lg", // Adds shadow effect
                    color: 'white'
                }} >SKILLS</Text>
            </Box>
            <Box marginLeft={10} marginY={10}>
                <Text fontFamily='sans-serif' fontWeight='bold' color='black' fontSize='3xl' >Using Now :</Text>
                <SimpleGrid
                    columns={{ sm: 3, md: 4, lg: 5, xl: 5 }}
                    spacing={10}
                    marginY={5}
                    justifyContent='center'
                >
                    {skills.map(s => <Icon as={s}  boxSize = {20}  _hover={{ color: "gray.500", transform: "scale(1.1)" }} ></Icon>)}
                </SimpleGrid>
                <Text fontFamily='sans-serif' fontWeight='bold' color='black' fontSize='3xl' >Learning :</Text>
                <SimpleGrid
                    columns={{ sm: 3, md: 4, lg: 5, xl: 5 }}
                    spacing={10}
                    marginY={5}
                    justifyContent='center'
                >
                    {learning.map(s => <Icon as={s}  boxSize = {20}  _hover={{ color: "gray.500", transform: "scale(1.1)" }} ></Icon>)}
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default Skills
