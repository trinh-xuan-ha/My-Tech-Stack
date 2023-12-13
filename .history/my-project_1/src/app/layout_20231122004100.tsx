"user client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppHeader from "@/app/components/app.header";
import BasicExample from "@/app/components/app.table";
import AdvancedExample from "@/app/components/app.footer";
import { Container } from "react-dom";

// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <Container>{children}</Container>

        <AdvancedExample />
      </body>
    </html>
  );
}
