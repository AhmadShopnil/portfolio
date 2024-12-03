import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abu Shaleh Ahamad Shopnil - Full Stack Web Developer",
  description:
    "Portfolio of Abu Shaleh Ahamad Shopnil, a Full Stack Web Developer specializing in JavaScript, React, Node.js, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
