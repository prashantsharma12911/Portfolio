import {
  Box,
  Button,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  displayVertical: boolean;
  setExpanded?: () => void;
  expanded?: boolean;
}

interface NavInfo {
  text: string;
  redirectPage?: string;
  componentId: string;
}

const NavBar = ({ displayVertical, expanded }: Props) => {
  const navTexts: NavInfo[] = [
    { text: "About me", componentId: "aboutMe" },
    { text: "Skills", componentId: "skills" },
    // { text: 'Home', redirectPage: 'home' },
    { text: "Projects", redirectPage: "/projects", componentId: "" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (displayVertical) {
    if (expanded) {
      return (
        <Box>
          <VStack>
            {navTexts.map((navInfo, index) =>
              navInfo.redirectPage == null ? (
                <Text
                  key={index}
                  onClick={() => scrollToSection(navInfo.componentId)}
                  cursor="pointer"
                  color="white"
                  fontWeight="bold"
                  _hover={{ color: "gray.300" }}
                >
                  {navInfo.text}
                </Text>
              ) : (
                <Link to={navInfo.redirectPage} color="white">
                  <Text
                    color="white"
                    fontWeight="bold"
                    _hover={{ color: "gray.300" }}
                  >
                    {navInfo.text}
                  </Text>
                </Link>
              )
            )}
            <Button
              bg="white"
              color="black"
              fontWeight="bold"
              fontSize="md"
              onClick={() => scrollToSection("contactMe")}
            >
              CONTACT ME
            </Button>
          </VStack>
        </Box>
      );
    } else {
      return null;
    }
  }
  return (
    <Box>
      <HStack spacing={5}>
        {navTexts.map((navInfo, index) =>
          navInfo.redirectPage == null ? (
            <Text
              key={index}
              onClick={() => scrollToSection(navInfo.componentId)}
              cursor="pointer"
              color="white"
              fontWeight="bold"
              _hover={{ color: "gray.300" }}
            >
              {navInfo.text}
            </Text>
          ) : (
            <Link to={navInfo.redirectPage} color="white">
              <Text
                color="white"
                fontWeight="bold"
                _hover={{ color: "gray.300" }}
              >
                {navInfo.text}
              </Text>
            </Link>
          )
        )}
        <Button
          bg="white"
          color="black"
          fontWeight="bold"
          fontSize="md"
          onClick={() => scrollToSection("contactMe")}
        >
          CONTACT ME
        </Button>
      </HStack>
    </Box>
  );
};

export default NavBar;
