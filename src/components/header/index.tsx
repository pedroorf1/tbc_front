import { HStack, Image, Link, Center } from "@chakra-ui/react";

export const Header = () => {
  return (
    <HStack w="100%" h="auto" bg="blue.500">
      <Image src="assets/images/tbcMD.png" alt="" h="150px" ml={20} />
      <Center gap={50} width="80%">
        <Link href="https://www.google.com.br" color="white" isExternal>
          Google
        </Link>
        <Link href="https://www.google.com.br" color="white" isExternal>
          Google
        </Link>
        <Link href="https://www.google.com.br" color="white" isExternal>
          Google
        </Link>
        <Link href="https://www.google.com.br" color="white" isExternal>
          Google
        </Link>
        <Link href="https://www.google.com.br" color="white" isExternal>
          Google
        </Link>
      </Center>
    </HStack>
  );
};
