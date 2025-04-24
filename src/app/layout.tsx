//next js
import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow } from "next/font/google";

//global css
import "./globals.css";
import { ThemeProvider } from "next-themes";
import {ClerkProvider} from '@clerk/nextjs'

//fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowFont = Barlow({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: "--font-barlow",
})

//const metadata
export const metadata: Metadata = {
  title: "GoShop",
  description: "Online SHopping Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${barlowFont.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
  );
}
