"use client"

import Link from "next/link"

import { useLocalizedContent } from "@/context/content-context"
import { useContentT, useT } from "@/i18n/use-t"
import { Menu, Moon, Sun, X } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useStore } from "@/hooks/use-store"

import { isMenuOpen, theme, toggleMenu, toggleTheme } from "@/lib/stores"

import useScroll from "@/app/_hooks/use-scroll"

import LocaleSwitcher from "./locale-switcher"
import MobileNav from "./mobile-nav"

const ThemeToggle = ({ currentTheme }: { currentTheme: "light" | "dark" }) => (
  <Button
    variant="ghost"
    size="icon"
    onClick={toggleTheme}
    aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
    className="rounded-full"
  >
    {currentTheme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
  </Button>
)

const DesktopNav = ({ currentTheme }: { currentTheme: "light" | "dark" }) => {
  const ct = useContentT()
  const { site } = useLocalizedContent(ct)
  const t = useT()

  return (
    <div className="hidden md:flex items-center gap-8">
      {site.nav.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
        >
          {item.title}
        </Link>
      ))}
      <ThemeToggle currentTheme={currentTheme} />
      <LocaleSwitcher />
      <Button className="rounded-full gradient-primary hover:opacity-90" asChild>
        <Link href="#contact">{t.common.hireMe}</Link>
      </Button>
    </div>
  )
}

const MobileMenuButtons = ({ menuOpen, currentTheme }: { menuOpen: boolean; currentTheme: "light" | "dark" }) => (
  <div className="md:hidden flex items-center gap-2">
    <ThemeToggle currentTheme={currentTheme} />
    <LocaleSwitcher />
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleMenu}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      className="rounded-full"
    >
      {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
  </div>
)

const Navbar = () => {
  const ct = useContentT()
  const { site } = useLocalizedContent(ct)
  const menuOpen = useStore(isMenuOpen)
  const currentTheme = useStore(theme)
  const isScrolled = useScroll()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold gradient-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-0.5"
          >
            {site.name}
          </Link>

          <DesktopNav currentTheme={currentTheme} />
          <MobileMenuButtons menuOpen={menuOpen} currentTheme={currentTheme} />
        </div>

        <MobileNav />
      </nav>
    </header>
  )
}

export default Navbar
