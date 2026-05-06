import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import * as schema from "./schema"

const sqlite = new Database("src/db/portfolio.db")
const db = drizzle(sqlite, { schema })

async function seed() {
  console.warn("Seeding database...")

  db.delete(schema.testimonials).run()
  db.delete(schema.gallery).run()
  db.delete(schema.projects).run()
  db.delete(schema.skills).run()
  db.delete(schema.chartData).run()
  db.delete(schema.stats).run()
  db.delete(schema.about).run()
  db.delete(schema.navItems).run()
  db.delete(schema.siteConfig).run()

  db.insert(schema.siteConfig)
    .values({
      name: "Nguyễn Thành Nam",
      title: "Front End Developer | Product Engineering",
      description:
        "Front-end developer with 3+ years building and scaling international product platforms. Specialized in React, Next.js, TypeScript, and high-performance data rendering.",
      url: "https://namnguyenthanh.dev",
      email: "namnguyenthanhdev@gmail.com",
      phone: "0938948764",
      location: "Ho Chi Minh City, Vietnam",
      github: "https://github.com/namnguyenthanhdev",
      linkedin: "https://linkedin.com/in/namthanh222",
      twitter: "https://twitter.com/",
    })
    .run()

  db.insert(schema.navItems)
    .values([
      { title: "About", href: "#about", order: 1 },
      { title: "Skills", href: "#skills", order: 2 },
      { title: "Products", href: "#projects", order: 3 },
      { title: "Contact", href: "#contact", order: 4 },
    ])
    .run()

  db.insert(schema.about)
    .values({
      headline: "Product Front-End Engineer",
      bio: JSON.stringify([
        "With 3+ years of experience in product companies, I build and maintain large-scale platforms serving real users worldwide. My focus is on delivering pixel-perfect interfaces while maintaining clean, SOLID code that scales.",
        "I specialize in React, Next.js, TypeScript, and performance optimization — from virtualized tables handling 50,000+ rows to real-time presence systems tracking concurrent sessions.",
        "Strong foundation in design systems, accessibility, SEO best practices, and internationalization. I bridge the gap between design intent and engineering reality.",
      ]),
      image: "/_images/hero.jpg",
      education: JSON.stringify({
        school: "International University (Đại học Quốc tế - ĐHQG)",
        degree: "Bachelor of Science",
        gpa: "8.2/10.0",
        scholarship: "Partial scholarship for 4 years",
        highSchool: "Le Hong Phong High School For The Gifted",
        grade: "Good grade",
        references: [
          {
            name: "Tung Nguyen",
            role: "5-year Senior at DOL English, Mentor",
            email: "minhtung.nguyen0612@gmail.com",
            relation: "Mentor at DOL English"
          },
          {
            name: "Nam Le",
            role: "Senior Software Engineer at Grab",
            linkedin: "linkedin.com/in/lehoangnam",
            relation: "Mentor, Senior Engineer at Grab"
          }
        ]
      }),
    })
    .run()

  db.insert(schema.stats)
    .values([
      {
        label: "Rows Virtualized",
        value: "50000",
        suffix: "+",
        icon: "📊",
        color: "from-blue-500 to-indigo-500",
        order: 1,
      },
      {
        label: "Render Speed Improvement",
        value: "74",
        suffix: "%",
        icon: "⚡",
        color: "from-blue-600 to-sky-500",
        order: 2,
      },
      {
        label: "Records Exported",
        value: "100000",
        suffix: "+",
        icon: "📤",
        color: "from-cyan-500 to-blue-500",
        order: 3,
      },
      {
        label: "Paginated Records",
        value: "10000",
        suffix: "+",
        icon: "📋",
        color: "from-indigo-500 to-blue-500",
        order: 4,
      },
      {
        label: "User States Tracked",
        value: "5",
        suffix: "+",
        icon: "🔌",
        color: "from-sky-500 to-blue-600",
        order: 5,
      },
      {
        label: "Manual Work Reduced",
        value: "60",
        suffix: "%",
        icon: "🔄",
        color: "from-blue-500 to-cyan-500",
        order: 6,
      },
    ])
    .run()

  db.insert(schema.chartData)
    .values([
      { year: "2022", projects: 1, clients: 0, articles: 0 },
      { year: "2023", projects: 1, clients: 0, articles: 0 },
      { year: "2024", projects: 1, clients: 0, articles: 0 },
      { year: "2025", projects: 1, clients: 0, articles: 0 },
      { year: "2026", projects: 2, clients: 0, articles: 0 },
    ])
    .run()

  db.insert(schema.skills)
    .values([
      { name: "TypeScript", icon: "🔷", proficiency: "expert", order: 1 },
      { name: "JavaScript ES6", icon: "📜", proficiency: "expert", order: 2 },
      { name: "React", icon: "⚛️", proficiency: "expert", order: 3 },
      { name: "Next.js", icon: "▲", proficiency: "expert", order: 4 },
      { name: "HTML5 / CSS3", icon: "📝", proficiency: "expert", order: 5 },
      { name: "Tailwind CSS", icon: "🎨", proficiency: "expert", order: 6 },
      { name: "Redux / RTK Query", icon: "🔄", proficiency: "proficient", order: 7 },
      { name: "React Query", icon: "🔍", proficiency: "proficient", order: 8 },
      { name: "shadcn/ui", icon: "🎯", proficiency: "proficient", order: 9 },
      { name: "TanStack Table", icon: "📋", proficiency: "proficient", order: 10 },
      { name: "SocketIO", icon: "🔌", proficiency: "proficient", order: 11 },
      { name: "Mobx", icon: "📦", proficiency: "proficient", order: 12 },
      { name: "Ant Design", icon: "🎯", proficiency: "proficient", order: 13 },
      { name: "i18n / l10n", icon: "🌍", proficiency: "proficient", order: 14 },
      { name: "Git / GitHub", icon: "🔧", proficiency: "proficient", order: 15 },
      { name: "Figma", icon: "🎨", proficiency: "proficient", order: 16 },
      { name: "React Native", icon: "📱", proficiency: "familiar", order: 17 },
      { name: "AWS Cloud", icon: "☁️", proficiency: "familiar", order: 18 },
    ])
    .run()

  const projectUrls: Record<string, Array<{ label: string; url: string }>> = {
    "1": [],
    "2": [
      { label: "Gigsberg", url: "https://gigsberg.com" },
      { label: "Entradas Marca", url: "https://entradas.marca.com/" },
      { label: "Tickets Marca", url: "https://tickets.marca.com/" },
      { label: "Transact Entertainment", url: "https://www.transact-entertainment.com/" },
      { label: "Boleto Confirmado", url: "https://www.boletoconfirmado.com/" },
      { label: "Metropoli", url: "https://entradas.elmundo.es/" },
    ],
    "3": [{ label: "DOL Grammar", url: "https://grammar.dolenglish.vn" }],
    "4": [],
    "5": [],
    "6": [],
  }

  const projectDetails = {
    "1": JSON.stringify([
      "Experience in building & maintaining large-scale data rendering & performance:",
      "Engineered nested virtualized table components rendering 50,000+ rows, reducing render time from ~850ms to ~220ms (~74% improvement) with stable memory usage under sustained load",
      "Implemented cursor-based pagination handling edge cases such as insufficient data thresholds, initial fetch control, and seamless state transitions across 10,000+ paginated records",
      "Built a non-blocking export pipeline processing 100,000+ records while preserving full UI responsiveness",
      "Experience in building & maintaining real-time tracking:",
      "Implemented a presence system tracking 5+ user states (online, offline, pending, and more) across concurrent sessions by SocketIO.",
    ]),
    "2": JSON.stringify([
      "Experience in building & maintaining internationalization & localization:",
      "Maintained a multi-language translation management system, enabling content editors to update UI strings across multiple languages without engineering involvement",
      "Supported multi-location configurations with market-specific settings, currencies, and content from a single unified platform",
      "Built bulk translation tooling with JSON import/export, unknown key detection, and validation feedback",
      "Experience in building & maintaining payment & Back Office:",
      "Developed an automated payment approval flow processing thousands of daily transactions, reducing manual intervention by ~60%",
      "Built customizable sales workflows enabling regional teams to adapt CRM behavior per market without engineering involvement",
    ]),
    "3": JSON.stringify([
      "Experience in building & maintaining interactive UI & logics of Learning & assessment platform:",
      "MCQs, essay-based questions, drag-and-drop exercises, flashcards, and rich-text format responses",
      "Provide instant results, customizable flashcards, and rich-text editor.",
    ]),
    "4": JSON.stringify([
      "Experience in maintaining static UI of Management & Administration:",
      "Student & Teacher Management: Tracks student progress, attendance, and performance.",
      "Teaching Logs: Allows teachers to record lesson plans, notes, and teaching history.",
      "Form-Based Data Entry: Streamlines the input of information such as student records, assignments, and feedback.",
      "Developed SEO-optimized landing pages.",
      "Collaborated closely with UI/UX teams using Figma for design implementation.",
    ]),
    "5": JSON.stringify([
      "Maintenance of CMS & LMS for IELTS preparation.",
      "Interactive assessment logic, student management, teaching logs, and form-based data entry for records and feedback.",
    ]),
    "6": JSON.stringify([
      "Responsive mobile-first web application for Android.",
      "Adaptive design with RESTful API integration, Redux state management, and deployment configuration on Android platform.",
    ]),
  }

  const projectTechStack = {
    "1": ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "RTK Query", "TanStack Table", "SocketIO"],
    "2": ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18n", "shadcn/ui"],
    "3": ["Next.js", "React", "Mobx", "Ant Design"],
    "4": ["Next.js", "React", "Mobx", "Ant Design", "SEO"],
    "5": ["Next.js", "React", "Mobx", "Ant Design"],
    "6": ["React Native", "Redux", "HTML", "CSS", "JavaScript"],
  }

  const projects = [
    {
      id: "1",
      title: "FTN — Global Ticket Resale Platform",
      description:
        "Converted a 10-year production system. Engineered nested virtualized tables rendering 50,000+ rows (850ms → 220ms, 74% improvement). Implemented cursor-based pagination for 10,000+ records and real-time presence tracking via SocketIO.",
      category: "Enterprise",
      image: "https://i.ibb.co/dsPV3ysd/ftn-logo.png"
    },
    {
      id: "2",
      title: "Gigsberg — Ticket Sales CRM",
      description:
        "Multi-language, multi-location CRM. Built bulk translation tooling with JSON import/export, automated payment approval flows reducing manual work by 60%, and customizable sales workflows for regional market adaptation.",
      category: "CRM",
      image: "https://i.ibb.co/5xWJfJr2/gigsberg-logo.png",
    },
    {
      id: "3",
      title: "DOL Grammar — E-learning Platform",
      description:
        "Interactive learning platform with MCQs, drag-and-drop exercises, flashcards, and rich-text responses. Built instant results engine and customizable study tools for IELTS/TOEIC preparation.",
      category: "Education",
      image: "https://i.ibb.co/XfLsLvJq/dol-grammar-logo.png",
    },
    {
      id: "4",
      title: "LMS TOEIC — Education CMS",
      description:
        "Full CMS & LMS for TOEIC. Student & Teacher Management, Teaching Logs, Form-Based Data Entry, SEO-optimized landing pages. Maintained by collaborating closely with UI/UX teams via Figma.",
      category: "Education",
      image: "https://i.ibb.co/gL2VFqDC/dol-lms-logo.png",
    },
    {
      id: "5",
      title: "LMS IELTS — Education Platform",
      description:
        "Maintenance of CMS & LMS for IELTS preparation. Interactive assessment logic, student management, teaching logs, and form-based data entry for records and feedback.",
      category: "Education",
      image: "https://i.ibb.co/gL2VFqDC/dol-lms-logo.png",
    },
    {
      id: "6",
      title: "Win Wine — Mobile Web App",
      description:
        "Responsive mobile-first web application for Android. Adaptive design with RESTful API integration, Redux state management, and deployment configuration on Android platform.",
      category: "Mobile",
      image: "https://i.ibb.co/QF7CJSPh/winwine-logo.png",
    },
  ]

  for (const p of projects) {
    db.insert(schema.projects)
      .values({
        id: p.id,
        title: p.title,
        description: p.description,
        image: p.image,
        tags: JSON.stringify(projectTechStack[p.id as keyof typeof projectTechStack]),
        githubUrl: null,
        urls: JSON.stringify(projectUrls[p.id as keyof typeof projectUrls]),
        category: p.category,
        order: parseInt(p.id),
        details: projectDetails[p.id as keyof typeof projectDetails],
        techStack: JSON.stringify(projectTechStack[p.id as keyof typeof projectTechStack]),
      })
      .run()
  }

  const testimonials = [
    {
      name: "Tung Nguyen",
      role: "5-year Senior at DOL English, Mentor",
      text: "Nam is a dedicated developer who consistently delivers high-quality work. His attention to detail and problem-solving skills make him an invaluable team member.",
      image: "https://i.ibb.co/k2jxvmBd/man-2-avatar.jpg",
      email: "tungnguyen@example.com",
      order: 1,
    },
    {
      name: "Nam Le",
      role: "Senior Software Engineer at Grab, Mentor",
      text: "Strong understanding of SOLID principles and modern frontend practices. Nam brings both technical excellence and a collaborative mindset to every project.",
      image: "https://i.ibb.co/RxqSsrq/man-1-avatar.jpg",
      email: "namle@example.com",
      order: 2,
    },
    {
      name: "Intertu Education",
      role: "Employer",
      text: "Nam effectively taught complex Computer Science topics to international high-school students, demonstrating deep knowledge and excellent communication skills.",
      image: "https://i.ibb.co/TD8D2sWb/woman-1-avatar.jpg",
      email: "contact@intertu.edu.vn",
      order: 3,
    },
  ]

  for (const t of testimonials) {
    db.insert(schema.testimonials).values(t).run()
  }

  console.warn("Database seeded successfully!")
}

seed().catch((err) => {
  console.error("Seed failed:", err)
  process.exit(1)
})
