import "./globals.css";
import { Inter } from "next/font/google"; // Import Inter font

// Configure the font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Lucas Palhano Fonseca - Portfólio",
  description:
    "Portfólio profissional de Lucas Palhano Fonseca, desenvolvedor web Front-end",
  authors: [{ name: "Lucas Palhano Fonseca" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
