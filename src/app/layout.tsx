/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/layout/Header";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZenSwank Gift Company",
  description: "Welcome to ZenSwank Gift Company!  We are a New England-based gift boxing service that’s here to bring you perfectly packaged gifts for any occasion.  We have a variety of curated boxes for your one stop shop for convenient gifting!  Looking for something a little more personal? Choose from our sele",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap'
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
