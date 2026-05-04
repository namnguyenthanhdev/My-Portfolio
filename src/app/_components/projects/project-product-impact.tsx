import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Zap, TrendingUp, Database, Users, BarChart3, Code2, Target, ArrowRight, Minus, Plus } from "lucide-react"

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

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-card border border-border/50 rounded-xl p-4 text-center hover:border-primary/30 transition-colors">
        <div className="mb-2 flex justify-center">{metric.icon}</div>
        <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{metric.value}</div>
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

function CaseStudy({ name, goal, role, team, problem, solution, result, metrics, techStack, techDecision }: CaseStudyProps) {
  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-8 top-20 bottom-0 w-px bg-border/50 hidden lg:block" />

      <Card className="relative border-border/50 bg-card overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

        <CardContent className="p-6 sm:p-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{name}</h3>
                <Badge className="bg-primary/10 text-primary border-primary/20 font-medium">{goal}</Badge>
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

          {/* Story Flow: Problem → Solution → Result */}
          <div className="space-y-6 mb-8">
            {/* Problem */}
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <Minus className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">Problem</div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{problem}</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-px h-6 bg-border" />
            </div>

            {/* Solution */}
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Solution</div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{solution}</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-px h-6 bg-border" />
            </div>

            {/* Result */}
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Plus className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Business Result</div>
                <p className="text-sm sm:text-base text-foreground leading-relaxed font-medium">{result}</p>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="mb-8">
            <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Impact Metrics</div>
            <div className="grid sm:grid-cols-3 gap-4">
              {metrics.map((metric, i) => (
                <MetricCard key={i} metric={metric} />
              ))}
            </div>
          </div>

          {/* Tech Stack & Decision */}
          <div className="space-y-4 pt-6 border-t border-border/50">
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-muted/50 hover:bg-muted transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-semibold text-foreground mb-1">Why {techDecision.tech}?</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{techDecision.reason}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function ProjectProductImpact() {
  return (
    <section id="impact" className="py-16 sm:py-24 relative" aria-labelledby="impact-heading">
      <div className="absolute inset-0 gradient-bg-section" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 id="impact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-accent">Business Impact</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Product case studies showcasing how my code drives real business outcomes
          </p>
        </motion.div>

        {/* Case Studies with Timeline */}
        <div className="space-y-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CaseStudy
              name="FTN Data Optimization"
              goal="Transaction Velocity"
              role="Senior Frontend Engineer"
              team="5 Engineers, 2 Designers"
              problem="850ms table latency caused brokers to miss ticket price shifts. At 50,000+ rows, UI froze during peak trading windows, directly causing lost revenue opportunities."
              solution="Implemented TanStack Virtual for efficient rendering + Nested Tables architecture. Added React.memo optimization and strategic code splitting for instant data access at scale."
              result="Brokers now execute trades faster than competitors with real-time pricing data, directly increasing platform GMV through higher transaction volume."
              metrics={[
                { value: "74%", label: "Faster Render", before: "850ms", after: "220ms", icon: <Zap className="w-5 h-5 text-yellow-500" /> },
                { value: "50K+", label: "Rows @ 60fps", before: "Unusable", after: "Instant", icon: <Database className="w-5 h-5 text-blue-500" /> },
                { value: "3x", label: "Trading Speed", before: "Missed shifts", after: "Real-time", icon: <TrendingUp className="w-5 h-5 text-green-500" /> }
              ]}
              techStack={["TanStack Virtual", "TanStack Table", "React", "TypeScript", "Code Splitting", "React.memo"]}
              techDecision={{
                tech: "TanStack Virtual + Nested Tables",
                reason: "Reseller domain required handling 50K+ real-time pricing rows. Traditional rendering froze UI at peak trading. Virtual scrolling maintained 60fps while Nested Tables enabled complex data relationships brokers needed for decision-making."
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CaseStudy
              name="Gigsberg Automation"
              goal="Operational Scalability"
              role="Full Stack Engineer"
              team="4 Engineers, 1 Product Manager"
              problem="Payment approval was entirely manual — each transaction required back-office review. This bottleneck limited daily volume to ~200 transactions and increased operational costs."
              solution="Built Automated Payment Approval Flow integrated into CRM with rule-based auto-approval logic and risk scoring. Maintained financial security with full audit trails."
              result="Transaction volume scaled from 200 to 500+ daily without adding headcount. Back-office team now focuses on exception handling rather than routine approvals."
              metrics={[
                { value: "60%", label: "Less Manual Work", before: "~2hrs", after: "Automated", icon: <Users className="w-5 h-5 text-purple-500" /> },
                { value: "500+", label: "Daily Transactions", before: "~200", after: "500+", icon: <BarChart3 className="w-5 h-5 text-blue-500" /> },
                { value: "0", label: "Extra Headcount", before: "Hire 3+", after: "Scaled", icon: <TrendingUp className="w-5 h-5 text-green-500" /> }
              ]}
              techStack={["Node.js", "React", "CRM API", "Rule Engine", "Risk Scoring", "PostgreSQL"]}
              techDecision={{
                tech: "Rule-Based Automation Engine",
                reason: "Business needed to scale from 200 to 500+ daily transactions without doubling back-office team. Built intelligent auto-approval with risk scoring directly into CRM — eliminated manual bottleneck while maintaining financial controls and audit compliance."
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
