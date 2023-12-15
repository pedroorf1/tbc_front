import { Rubik, Roboto } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});
const roboto = Roboto({
  weight: "500",
  variable: "--font-roboto",
});

export const fonts = {
  rubik,
  roboto,
};
