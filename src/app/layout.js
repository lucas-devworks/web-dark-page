import "./globals.css";

export const metadata = {
  title: "Dark Mode",
  description: "Projeto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
