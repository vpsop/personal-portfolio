import type { Metadata } from "next";
import "./globals.css";
import { jost } from "@/fonts";

export const metadata: Metadata = {
  title: "Varun Pratap Singh",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jost.className} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
