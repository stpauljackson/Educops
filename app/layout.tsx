import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StreamLine - Premium SaaS Platform",
  description: "Streamline your workflow and boost productivity with our all-in-one platform.",
  keywords: "saas, productivity, workflow, automation, collaboration",
  authors: [{ name: "StreamLine Team" }],
  creator: "StreamLine",
  publisher: "StreamLine",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://streamline.com",
    title: "StreamLine - Premium SaaS Platform",
    description: "Streamline your workflow and boost productivity with our all-in-one platform.",
    siteName: "StreamLine",
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamLine - Premium SaaS Platform",
    description: "Streamline your workflow and boost productivity with our all-in-one platform.",
    creator: "@streamline",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import Footer from "@/components/commons/Footer"
