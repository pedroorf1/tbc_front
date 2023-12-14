import { fonts } from "./fonts";
import { Providers } from "./chakraProvider";

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
