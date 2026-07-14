import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layout, Server, Database, Wrench, CheckCircle2 } from "lucide-react"

const SKILL_CATEGORIES = [
  { id: "frontend", label: "Frontend", icon: Layout },
  { id: "backend", label: "Backend", icon: Server },
  { id: "databases", label: "Databases", icon: Database },
  { id: "tools", label: "Tools & DevOps", icon: Wrench },
]

const SKILLS_DATA = {
  frontend: [
    { name: "HTML5", level: "Advanced", desc: "Semantic page structure & SEO optimization basics" },
    { name: "CSS3", level: "Advanced", desc: "Flexbox, Grid, custom animations & responsive layouts" },
    { name: "JavaScript", level: "Advanced", desc: "ES6+, Async programming & DOM manipulation" },
    { name: "React", level: "Advanced", desc: "Hooks, State management, Context API & performance tuning" },
    { name: "TypeScript", level: "Intermediate", desc: "Static typing, interfaces & compile-time error reduction" },
  ],
  backend: [
    { name: "Spring Boot", level: "Intermediate", desc: "Rest APIs, Spring Security & dependency injection" },
    { name: "Hibernate", level: "Intermediate", desc: "ORM mapping, transaction management & JPA repositories" },
  ],
  databases: [
    { name: "MySQL", level: "Advanced", desc: "Relational database schema design & complex SQL queries" },
    { name: "MongoDB", level: "Intermediate", desc: "NoSQL document storage, aggregation pipelines & scaling" },
  ],
  tools: [
    { name: "Git", level: "Advanced", desc: "Version control, branching strategies & conflict resolution" },
    { name: "GitHub", level: "Advanced", desc: "Pull requests, code reviews & repository management" },
    { name: "Jenkins", level: "Beginner", desc: "Continuous Integration & continuous delivery pipelines setup" },
    { name: "Postman", level: "Advanced", desc: "API testing, environment variables & collection runs" },
  ],
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "databases" | "tools">("frontend")

  return (
    <section id="skills" className="py-24 px-6 relative max-w-5xl mx-auto">
      {/* Decorative Blur */}
      <div className="glow-blur bg-blue-600/5 w-80 h-80 top-10 right-1/4 absolute" />

      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase font-sans">
            03. Expertise
          </h2>
          <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
            Skills & Stack
          </h3>
          <div className="w-12 h-1 bg-blue-500 rounded mt-3 mx-auto md:mx-0" />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex justify-center md:justify-start">
          <div className="glass-panel p-1.5 rounded-full flex flex-wrap gap-1 w-full max-w-xl shadow-md">
            {SKILL_CATEGORIES.map((tab) => {
              const TabIcon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors flex-1 cursor-pointer font-heading ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-skills-tab"
                      className="absolute inset-0 bg-blue-600 border border-blue-500/30 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <TabIcon className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {SKILLS_DATA[activeTab].map((skill) => (
                <div
                  key={skill.name}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden flex flex-col gap-4"
                >
                  {/* Decorative faint glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none" />

                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold font-heading text-white">
                      {skill.name}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-blue-400 px-2 py-0.5 rounded-full bg-blue-950/30 border border-blue-500/10 font-sans">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      {skill.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-1">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
