import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectRecord from '../entities/ProjectRecord'
import ProjectDetails from '../components/ProjectDetails'

const Projects = () => {
    const projects: ProjectRecord[] = [
        {
            title: 'Story leaf', description: "It is an android app which uses google books Api  to get data of a list of free books related to a" +
                "search keyword . Books are displayed using a recycler view with  structured details and any user can" +
                "read the book by clicking it.",
            developedFor: "Self", startDate: "Jan 2020 ", endDate: "Oct 2020 ", beTech: ["Used Open Source api"], uiTech: ["Android"],
            images: [
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA..",
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA..",
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA..",
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA..",
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA.."
            ]
        },

        {
            title: 'Story leaf', description: "It is an android app which uses google books Api  to get data of a list of free books related to a" +
                "search keyword . Books are displayed using a recycler view with  structured details and any user can" +
                "read the book by clicking it.",
            developedFor: "Self", startDate: "Jan 2020 ", endDate: "Oct 2020 ", beTech: ["Used Open Source api"], uiTech: ["Android"],
            images: [
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA..",
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA..",
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA..",
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA..",
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA.."
            ]
        },

        {
            title: 'Story leaf', description: "It is an android app which uses google books Api  to get data of a list of free books related to a" +
                "search keyword . Books are displayed using a recycler view with  structured details and any user can" +
                "read the book by clicking it.",
            developedFor: "Country Delight",  startDate: "Jan 2020 ", endDate: "Oct 2020 ", beTech: ["Used Open Source api"], uiTech: ["Android"],
            images: [
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA..",
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA..",
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA..",
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA..",
                "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg&_gl=1*sz84ac*_ga*NTE5NTU3MTY0LjE3NDI3NTgxOTA.*_ga_8JE65Q40S6*MTc0Mjc1ODE4OS4xLjEuMTc0Mjc1ODIzMy4wLjAuMA.."
            ]
        },

    ]
    return (
        <Box>
            <Box w='100vw' bg='black' display='flex' justifyContent='center'>
                <Text fontFamily='sans-serif' fontWeight='extrabold' fontSize='4xl' color='white'> P R O J E C T S</Text>
            </Box>
            <ProjectDetails projects={projects}/>
        </Box>
    )
}

export default Projects
