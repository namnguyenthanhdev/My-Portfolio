import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useT } from "@/i18n/use-t"
import {
  Zap,
  TrendingUp,
  Database,
  Users,
  BarChart3,
  Code2,
  Target,
  ArrowRight,
  Minus,
  Plus,
} from "lucide-react"

interface Metric {
  value: string
  label: string
  before: string
  after: string
  icon: React.ReactNode
}

interface CaseStudyProps {
  name: string
  goal: string
  role: string
  team: string
  problem: string
  solution: string
  result: string
  metrics: Metric[]
  techStack: string[]
  techDecision: {
    tech: string
    reason: string
  }
}

// Helper to get icon based on label
function getIcon(label: string, value: string) {
  if (label.toLowerCase().includes("trading") || label.toLowerCase().includes("speed") || label.toLowerCase().includes("geschwindigkeit") || value === "3x") {
    return <TrendingUp className="w-5 h-5 text-green-500" />
  }
  if (label.toLowerCase().includes("render") || label.toLowerCase().includes("faster") || value === "74%") {
    return <Zap className="w-5 h-5 text-yellow-500" />
  }
  if (label.toLowerCase().includes("rows") || label.toLowerCase().includes("rows") || value === "50K+") {
    return <Database className="w-5 h-5 text-blue-500" />
  }
  if (label.toLowerCase().includes("transactions") || label.toLowerCase().includes("daily") || value === "500+") {
    return <BarChart3 className="w-5 h-5 text-blue-500" />
  }
  if (label.toLowerCase().includes("work") || label.toLowerCase().includes("manual") || value === "60%") {
    return <Users className="w-5 h-5 text-purple-500" />
  }
  return <TrendingUp className="w-5 h-5 text-green-500" />
}

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-card border border-border/50 rounded-xl p-4 text-center hover:border-primary/30 transition-colors">
        <div className="mb-2 flex justify-center">{metric.icon}</div>
        <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
          {metric.value}
        </div>
        <div className="text-xs font-semibold text-primary mb-3">{metric.label}</div>
        <div className="flex items-center justify-center gap-2 text-[11px]">
          <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 line-through">
            {metric.before}
          </span>
          <ArrowRight className="w-3 h-3 text-muted-foreground" />
          <span className="px-2 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-medium">
            {metric.after}
          </span>
        </div>
      </div>
    </div>
  )
}

function CaseStudy({
  name,
  goal,
  role,
  team,
  problem,
  solution,
  result,
  metrics,
  techStack,
  techDecision,
}: CaseStudyProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-20 bottom-0 w-px bg-border/50 hidden lg:block" />

      <Card className="relative border-border/50 bg-card overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{name}</h3>
                <Badge className="bg-primary/10 text-primary border-primary/20 font-medium">
                  {goal}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  {role}
                </span>
                <span className="flex items-center gap-1.5">
                  <Target className="w-4 h-4" />
                  {team}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <Minus className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                  {useT().impact.problem}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{problem}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-px h-6 bg-border" />
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {useT().impact.solution}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{solution}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-px h-6 bg-border" />
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Plus className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">
                  {useT().impact.result}
                </div>
                <p className="text-sm sm:text-base text-foreground leading-relaxed font-medium">{result}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              {useT().impact.impactMetrics}
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {metrics.map((metric, i) => (
                <MetricCard key={i} metric={{ ...metric, icon: getIcon(metric.label, metric.value) }} />
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-border/50">
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                {useT().impact.techStack}
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-muted/50 hover:bg-muted transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {useT().impact.whyTech?.replace("?", "")} {techDecision.tech}?
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {techDecision.reason}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function ProjectProductImpact() {
  const t = useT()
  const cases = t.impact.caseStudies

  return (
    <section id="impact" className="py-16 sm:py-24 relative" aria-labelledby="impact-heading">
      <div className="absolute inset-0 gradient-bg-section" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge variant="outline" className="mb-3">
            {t.impact.badge}
          </Badge>
          <h2 id="impact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-accent">{t.impact.title}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.impact.subtitle}
          </p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {cases.map((cs: any, idx: number) => (
            <motion.div
              key={cs.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
            >
              <CaseStudy
                name={cs.name}
                goal={cs.goal}
                role={cs.role}
                team={cs.team}
                problem={cs.problem}
                solution={cs.solution}
                result={cs.result}
                metrics={cs.metrics}
                techStack={cs.techStack}
                techDecision={cs.techDecision}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
