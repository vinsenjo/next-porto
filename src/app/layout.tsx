'use client'
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Vinsenjo",
//   description: "Vinsensius Jovinda Personal Website",
// };

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  const router = usePathname()
  const backgroundColor =
    router === "/porto" ? "bg-black" : router === "/" ? "bg-cream" : "bg-cream";
  return (

    <html lang="en">
      <body
        className={` ${backgroundColor} min-h-screen flex justify-center font-openSans`}
      >
        {children}
      </body>
    </html>
  );
}
