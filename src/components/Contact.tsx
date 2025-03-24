import { 
  Box, Button, FormControl, Input, Text, Textarea, VStack 
} from "@chakra-ui/react";
import React, { FormEvent, useRef } from "react";

const Contack = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const submitForm = (event: FormEvent) => {
    event.preventDefault();

    const query = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      phone: phoneRef.current?.value || "",
      message: messageRef.current?.value || "",
    };

    console.log("Form Submitted:", query);

    // Optionally, clear form fields after submission
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  return (
    <Box id="contactMe" display="flex" w="100vw" justifyContent="center" flexDirection="column" alignItems="center">
      <Text fontFamily="sans-serif" fontSize="4xl" fontWeight="bold" border="4px solid black" paddingX={5}>
        C O N T A C T
      </Text>
      <Text fontFamily="sans-serif" fontSize="2xl" fontWeight="bold" marginY={5} textAlign="center">
        Have a project idea, a query, or just want to connect? Drop me a message, and I’ll be happy to help!
      </Text>

      <form onSubmit={submitForm} style={{ width: "60vw" }}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <Input placeholder="Enter YOUR NAME" ref={nameRef} 
             variant="unstyled"
             borderBottom="3px solid black"
             paddingBottom={2}
             fontSize="lg"
             fontWeight="bold"
             color="gray.600"
             _focus={{ outline: "none", borderBottomColor: "black" }}/>
          </FormControl>

          <FormControl isRequired>
            <Input  type="email" 
                placeholder="ENTER YOUR EMAIL*" 
                ref={emailRef} 
                variant="unstyled"
                borderBottom="3px solid black"
                paddingBottom={2}
                fontSize="lg"
                fontWeight="bold"
                color="gray.600"
                _focus={{ outline: "none", borderBottomColor: "black" }} />
          </FormControl>

          <FormControl isRequired>
            <Input  type="tel" 
                placeholder="PHONE NUMBER" 
                ref={phoneRef} 
                variant="unstyled"
                borderBottom="3px solid black"
                paddingBottom={2}
                fontSize="lg"
                fontWeight="bold"
                color="gray.600"
                _focus={{ outline: "none", borderBottomColor: "black" }} />
          </FormControl>

          <FormControl isRequired>
            <Textarea  placeholder="YOUR MESSAGE*" 
                ref={messageRef} 
                variant="unstyled"
                borderBottom="3px solid black"
                paddingBottom={2}
                fontSize="lg"
                fontWeight="bold"
                color="gray.600"
                _focus={{ outline: "none", borderBottomColor: "black" }} />
          </FormControl>

          <Button w={40} type="submit"
                variant="unstyled"
                fontWeight="bold"
                fontSize="lg"
                // marginX={5}
                paddingX={3}
                borderLeft="3px solid black"
                borderRight="3px solid black"
                _hover={{ color: "gray.500" }}>
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Contack;
