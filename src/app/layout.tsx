import "./globals.scss";
import "./_styles/component-styles.scss"
import type { Metadata } from "next";

import Provider from "@/lib/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



export const metadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_APP_NAME || "Cinexus",
    template: `jkhjk`,
  },
  description: "App description!",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "./favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`  `}>
        <Provider>
          <Navbar />
          
          {children}
        <Footer />
        </Provider>
      </body>
    </html>
  );
}
