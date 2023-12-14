import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-roboto)",
    body: "var(--font-roboto)",
  },
  fontSizes: {
    lg: "18px",
  },
  cores: {
    cinza: {
      100: "#fafafa",
      200: "#f7f7f7",
    },
    blue: {
      100: "#3182CE",
      200: "#2B6CB0",
      300: "#215EA3",
      400: "#154E72",
      500: "#083943",
      600: "#002F38",
      700: "#00242E",
    },
  },
});
