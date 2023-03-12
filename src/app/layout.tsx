import "./globals.css";

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
    <html lang="pt-BR">
      <body className="bg-slate-100">{children}</body>
    </html>
  );
}
