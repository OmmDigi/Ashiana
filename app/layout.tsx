import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
import local from "next/font/local";
import MyProvider from "./MyProvider";
import Head from "next/head";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--josefin-400",
});

const tex = local({
  src: [
    {
      path: "../public/fonts/tex-gyre-adventor/texgyreadventor-bold.otf",
      // weight: "800",
    },
  ],
  variable: "--font-tex",
});

const texReg = local({
  src: [
    {
      path: "../public/fonts/tex-gyre-adventor/texgyreadventor-regular.otf",
    },
  ],

  variable: "--font-tex-reg",
});

export const metadata: Metadata = {
  title: "Best Interior Designer in Kolkata | Ashiana Interiors",
  description:
    "Elevate your space with Ashiana Interiors, Kolkata's best interior designer. Discover home interior design, office interior design, modular kitchen & more.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="f3BBwdzg0rbqr2r0mMaxwzenpaE5CD26iJgNj7H2Mlc"
        />
      </head>
      <body
        className={`${roboto.className} ${tex.variable} ${texReg.variable} ${josefin.variable} overflow-y-hidden`}
      >
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
