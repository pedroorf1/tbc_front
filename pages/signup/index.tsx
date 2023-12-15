import React from "react";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Link,
  Button,
} from "@chakra-ui/react";

import { Header } from "../../src/components/header/header";

const SignUp = () => {
  return (
    <VStack flex={1} justifyContent="center" alignItems="center">
      <Header />
      <Box mt={5}>
        <FormLabel textAlign="center" w="100%">
          CADASTRO
        </FormLabel>
        <FormControl
          display="flex"
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          gap={5}
        >
          <Box>
            <FormLabel>Email</FormLabel>
            <Input type="email" w="300px" />
          </Box>
          <Box>
            <FormLabel>Confirme o email</FormLabel>
            <Input type="email" w="300px" />
          </Box>
          <Box>
            <FormLabel>Senha</FormLabel>
            <Input type="password" w="300px" />
          </Box>
          <Box>
            <FormLabel>Confirme a senha</FormLabel>
            <Input type="password" w="300px" />
          </Box>
          <Button w="300px" type="submit" colorScheme="blue" mt={5}>
            Cadastrar
          </Button>
          <FormHelperText>
            Ao cadastrar você esta concordando com os termos. Leia os termos{" "}
            <Link color="blue.500" href="/termos">
              aqui.
            </Link>
          </FormHelperText>
        </FormControl>
      </Box>
    </VStack>
  );
};

export default SignUp;
