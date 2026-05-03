import { ContentProvider } from "@/context/content-context"
import { getAllContent } from "@/db/queries"
import en from "@/i18n/translations/en.json"

import type { ApiContent } from "@/types/api"

import About from "@/app/_components/about"
import Contact from "@/app/_components/contact"
import Hero from "@/app/_components/hero"
import Footer from "@/app/_components/navigation/footer"
import Navbar from "@/app/_components/navigation/navbar"
import Projects from "@/app/_components/projects"
import Skills from "@/app/_components/skills"
import Stats from "@/app/_components/stats"

const LocaleInit = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          try {
            var saved = localStorage.getItem('locale');
            if (saved) document.documentElement.lang = saved;
          } catch(e) {}
        })();
      `,
    }}
  />
)

const Home = async () => {
  const content = await getAllContent()

  if (!content.site || !content.about) {
    return <div className="min-h-screen flex items-center justify-center">{en.common.contentNotAvailable}</div>
  }

  return (
    <ContentProvider value={content as ApiContent}>
      <LocaleInit />
      <main id="main-content" className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ContentProvider>
  )
}

export default Home
