import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../../components/theme-provider";
import BaseFooter from "../../components/baseFooter";
export const metadata: Metadata = {
  title: "Anushk Kumar (@Berserk-23115)",
  description: "Web Developer | UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black"
      >
        <ThemeProvider
        attribute={"class"}
        enableSystem
        defaultTheme="dark"
        disableTransitionOnChange
        >
          {children}
          <BaseFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
