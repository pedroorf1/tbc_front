import React from "react";
import { HStack, Image, Center } from "@chakra-ui/react";

const Login = () => {
  return (
    <HStack w="100%" h="auto" bg="cores.blue.500">
      <Image src="assets/images/tbcMD.png" alt="" h="150px" ml={20} />
      <Center gap={50} width="80%">
        Login
      </Center>
    </HStack>
  );
};

export default Login;
