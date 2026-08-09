import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Limbu — Full-Stack Developer & CS Undergraduate",
  description:
    "Portfolio of Ashish Limbu, a Computer Science undergraduate from Tribhuvan University passionate about full-stack development, Java, Spring Boot, backend engineering, and ML-based security projects.",
  keywords: [
    "Ashish Limbu",
    "Full-Stack Developer",
    "Computer Science",
    "MERN Stack",
    "Spring Boot",
    "Java",
    "Backend Engineering",
    "Portfolio",
    "Kathmandu",
    "Nepal",
  ],
  authors: [{ name: "Ashish Limbu" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Ashish Limbu — Full-Stack Developer",
    description:
      "CS undergraduate passionate about full-stack development, Java, Spring Boot, and ML-based security projects.",
    url: "https://limbuashish.com.np",
    siteName: "Ashish Limbu Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Limbu — Full-Stack Developer",
    description:
      "CS undergraduate passionate about full-stack development, Java, Spring Boot, and ML-based security projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
