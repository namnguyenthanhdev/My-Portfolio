"use client"

import Link from "next/link"

import { useLocalizedContent } from "@/context/content-context"
import { useContentT, useT } from "@/i18n/use-t"

import { Button } from "@/components/ui/button"

import { useStore } from "@/hooks/use-store"

import { closeMenu, isMenuOpen } from "@/lib/stores"

const MobileNav = () => {
  const ct = useContentT()
  const { site } = useLocalizedContent(ct)
  const menuOpen = useStore(isMenuOpen)
  const t = useT()

  if (!menuOpen) return null

  return (
    <div id="mobile-menu" className="md:hidden py-4 border-t" role="menu">
      <div className="flex flex-col gap-2">
        {site.nav.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            role="menuitem"
            onClick={() => closeMenu()}
          >
            {item.title}
          </Link>
        ))}
        <Button className="rounded-full gradient-primary" asChild>
          <Link href="#contact">{t.common.hireMe}</Link>
        </Button>
      </div>
    </div>
  )
}

export default MobileNav
