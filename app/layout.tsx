import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import GlobalContextProvider from './contextApi';
import Sidebar from "./Components/SideBar/Sidebar";
// import {GlobalContextType} from "./Types/GlobalContextType";


const inter = Inter({ subsets:["latin"]});

const poppins = Poppins({
  subsets : ["latin"],
  variable: "--font-poppins",
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        {/* console.log("working"); */}
        <GlobalContextProvider>
          <body className={"poppins.className"}>{children}</body>
        </GlobalContextProvider>
      </ClerkProvider>
    </html>
  );
}


