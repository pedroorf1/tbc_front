import React from "react";
import { Box, HStack, Image, Menu, MenuItem } from "@chakra-ui/react";

// const logoMD = "../../../assets/imagens/header/tbcMD.png";
const logoMD = "../../../assets/imagens/header/logo.png";

export const Header = () => {
  return (
    <HStack w="100%" justifyContent="center" alignItems="center">
      <Image src={logoMD} alt="logo" height="150px" mt={5} />
    </HStack>
  );
};
