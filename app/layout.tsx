import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
import local from "next/font/local";
import MyProvider from "./MyProvider";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${roboto.className} ${tex.variable} ${texReg.variable} overflow-y-hidden`}
      >
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
