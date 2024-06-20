import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "My personal portfolio",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReactQueryProvider>
            <html lang="en">
            <body className={inter.className}>
            <Navbar/>
            {children}
            </body>
            </html>
        </ReactQueryProvider>
    );
}
