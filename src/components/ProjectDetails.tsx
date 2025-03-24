import React from "react";
import ProjectRecord from "../entities/ProjectRecord";
import { Box, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  projects: ProjectRecord[];
}

const ProjectDetails = ({ projects }: Props) => {
  return (
    <Box padding={5} bg="black">
      {projects.map((p, projectIndex) => (
        <Box key={projectIndex} marginBottom={10}>
          <Text
            fontFamily="sans-serif"
            fontWeight="bold"
            fontSize="3xl"
            color="white"
          >
            {p.title}
          </Text>
          <Text
            fontFamily="sans-serif"
            fontWeight="semibold"
            fontSize="2xl"
            color="white"
          >
            {p.description}
          </Text>
          <HStack>
            <Text
              fontFamily="sans-serif"
              fontWeight="semibold"
              fontSize="1xl"
              color="white"
            >
              Developed for :
            </Text>
            <Text
              fontFamily="sans-serif"
              fontWeight="semibold"
              fontSize="1xl"
              color="white"
            >
              {p.developedFor}
            </Text>
            <Text
              marginLeft={5}
              fontFamily="sans-serif"
              fontWeight="semibold"
              fontSize="medium"
              color="gray.500"
            >
              {p.startDate} - {p.endDate}
            </Text>
          </HStack>

          {/* Fix: Use minChildWidth to dynamically adjust columns */}
          <SimpleGrid minChildWidth={170} spacing={4} marginY={5}>
            {p.images.map((image, imageIndex) => (
              <Image
                key={imageIndex}
                src={image}
                boxSize={170}
                objectFit="cover"
                borderRadius="md"
                boxShadow="md"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.5)" }}
              />
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectDetails;
