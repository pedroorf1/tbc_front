import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-roboto)",
    body: "var(--font-roboto)",
  },
  semanticTokens: {
    colors: {
      background: {
        pressed: {
          base: { default: "blue.800", _dark: "blue.300" },
          subtle: { default: "blue.300", _dark: "blue.700" },
        },
      },
    },
  },
});
