import React from "react";
import { Box, HStack, Image, Menu, MenuItem } from "@chakra-ui/react";

// const logoMD = "../../../assets/imagens/header/tbcMD.png";
const logoMD = "../../../assets/imagens/header/1000freelasMD.png";

export const Header = () => {
  return (
    <HStack w="100%" justifyContent="center" alignItems="center">
      <Image src={logoMD} alt="logo" height="120px" mt={5} />
    </HStack>
  );
};
