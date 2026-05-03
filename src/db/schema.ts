import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const siteConfig = sqliteTable("site_config", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  url: text("url").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  location: text("location").notNull(),
  github: text("github").notNull(),
  linkedin: text("linkedin").notNull(),
  twitter: text("twitter").notNull(),
})

export const navItems = sqliteTable("nav_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  href: text("href").notNull(),
  order: integer("order").notNull(),
})

export const about = sqliteTable("about", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  headline: text("headline").notNull(),
  bio: text("bio").notNull(),
  image: text("image").notNull(),
})

export const stats = sqliteTable("stats", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  label: text("label").notNull(),
  value: text("value").notNull(),
  suffix: text("suffix").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  order: integer("order").notNull(),
})

export const chartData = sqliteTable("chart_data", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  year: text("year").notNull(),
  projects: integer("projects").notNull(),
  clients: integer("clients").notNull(),
  articles: integer("articles").notNull(),
})

export const skills = sqliteTable("skills", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  proficiency: text("proficiency").notNull(),
  order: integer("order").notNull(),
})

export const projects = sqliteTable("projects", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  tags: text("tags").notNull(),
  githubUrl: text("github_url"),
  urls: text("urls").notNull().default("[]"),
  category: text("category").notNull(),
  order: integer("order").notNull(),
})

export const gallery = sqliteTable("gallery", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  src: text("src").notNull(),
  order: integer("order").notNull(),
})

export const testimonials = sqliteTable("testimonials", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  role: text("role").notNull(),
  text: text("text").notNull(),
  image: text("image").notNull(),
  order: integer("order").notNull(),
})
