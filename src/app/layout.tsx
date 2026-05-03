import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { getSiteConfig } from "@/db/queries"

import { SkipLink } from "@/components/skip-link"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteConfig()

  return {
    title: {
      default: site?.title || "Portfolio",
      template: `%s | ${site?.title || "Portfolio"}`,
    },
    description: site?.description || "Frontend Developer Portfolio",
    keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "TailwindCSS", "Web Development"],
    authors: [{ name: site?.name || "Portfolio" }],
    creator: site?.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: site?.url,
      title: site?.title,
      description: site?.description,
      siteName: site?.name,
    },
    twitter: {
      card: "summary_large_image",
      title: site?.title,
      description: site?.description,
      creator: "@thanhnam",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className="scroll-smooth" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <SkipLink />
      <ThemeProvider />
      {children}
    </body>
  </html>
)

export default RootLayout
