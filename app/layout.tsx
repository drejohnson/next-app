import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Banner } from "@/components/banner"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"

import { Providers } from "./providers"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="en"
        className="motion-safe:scroll-smooth"
        suppressHydrationWarning
      >
        <head />
        <body
          className={cn(
            fontSans.variable,
            "min-h-screen bg-background font-sans antialiased"
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Banner />
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </>
  )
}
