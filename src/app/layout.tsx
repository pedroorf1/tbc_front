import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "../theme/chakraProvider";
import { fonts } from "../theme/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tbc - trabalhos freelancer e empregos",
  description: "App para busca de trabalhos freelancers e empregos.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={fonts.roboto.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
