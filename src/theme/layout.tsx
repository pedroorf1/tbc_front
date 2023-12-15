import { fonts } from "./fonts";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={fonts.roboto.variable}>
      <Providers>{children}</Providers>
    </html>
  );
}
