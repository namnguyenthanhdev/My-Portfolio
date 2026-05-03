"use client"

import { useLocalizedContent } from "@/context/content-context"
import { useContentT, useT } from "@/i18n/use-t"
import { Github, Heart, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  const ct = useContentT()
  const { site } = useLocalizedContent(ct)
  const t = useT()

  return (
    <footer className="border-t bg-muted/30" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold gradient-text from-primary to-cyan-400">{site.name}</p>
            <p className="text-sm text-muted-foreground mt-1">{t.footer.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <div className="flex flex-wrap justify-center gap-6">
              {site.nav.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-4">
            {[
              { href: site.github, label: "GitHub", icon: Github },
              { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
              { href: site.twitter, label: "Twitter", icon: Twitter },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
                aria-label={`${label} profile (opens in new tab)`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t space-y-6">
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-3">{t.footer.imageCredits}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {[
                { name: t.footer.credits.hero, id: "photo-1507003211169-0a1dd7228f2d", author: "Isaac Martin" },
                { name: t.footer.credits.ftn, id: "photo-1551288049-bebda4e38f71", author: "Matthew Henry" },
                { name: t.footer.credits.gigsberg, id: "photo-1611224923853-80b023f02d71", author: "Banks Oats" },
                { name: t.footer.credits.dolGrammar, id: "photo-1504386105548-98d22123d3b4", author: "Marvin Meyer" },
                {
                  name: t.footer.credits.lmsToeic,
                  id: "photo-1611926653458-09294b3142bf",
                  author: "Cristina Gottardi",
                },
                { name: t.footer.credits.lmsIelts, id: "photo-1677442136019-21780ecad995", author: "Clark Tibbs" },
                { name: t.footer.credits.winWine, id: "photo-1476480862126-209bfaa80c89", author: "Caleb George" },
                { name: t.footer.credits.gallery, id: "photo-1555066931-4365d14bab8c", author: "Pixabay" },
                {
                  name: t.footer.credits.testimonials,
                  id: "photo-1494790108377-be9c29b29330",
                  author: "Michael Dam",
                },
              ].map((img) => (
                <a
                  key={img.id}
                  href={`https://unsplash.com/photos/${img.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  title={img.author}
                >
                  {img.name}
                </a>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            {t.footer.madeWith} <Heart className="h-3 w-3 text-red-500 fill-red-500" /> {t.footer.by} {site.name} &copy;{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
