import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata = {
  title: {
    default: "Hayat Zeineddeen | Visual Artist",
    template: "%s | Hayat Zeineddeen",
  },
  description: "Visual artist exploring equality & women's narratives",
  openGraph: {
    title: "Hayat Zeineddeen | Visual Artist",
    description: "Visual artist exploring equality & women's narratives",
    url: "https://hayatzeineddeen.com",
    siteName: "Hayat Zeineddeen",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-background min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[url('/watercolor-bg.png')] bg-no-repeat bg-cover"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[url('/floral-bg.png')] bg-no-repeat bg-cover"></div>
            </div>
            <div className="relative z-10 flex flex-col min-h-screen">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
