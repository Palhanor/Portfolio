import "./globals.css";

export const metadata = {
  title: 'Lucas Palhano Fonseca - Desenvolvedor Front-end',
  description: 'Portfólio profissional de Lucas Palhano Fonseca, desenvolvedor web Front-end',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
