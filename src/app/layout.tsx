import { Inter } from "next/font/google";
import "./globals.css";
import { Session } from "inspector";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
        <>
        <SessionAuthProvider>
          <Navbar />
          {children}
          
          </SessionAuthProvider>
        </>
      </body>
    </html>
  );
}
