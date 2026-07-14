import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ChevronDown, ChevronUp, Code2, ShieldAlert, Sparkles } from "lucide-react"

interface Project {
  id: string
  title: string
  status?: string
  description: string
  tags: string[]
  githubUrl: string
  demoUrl?: string
  features: string[]
  challenges: string
  accentColor: string
  bgPattern: React.ReactNode
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const projects: Project[] = [
    {
      id: "rankquest",
      title: "RankQuest",
      description: "A comprehensive competitive coding platform built for student developers to practice algorithmic challenges and track live rankings.",
      tags: ["React", "Spring Boot", "MySQL", "Hibernate"],
      githubUrl: "https://github.com/Jayesh2160/RankQuest",
      features: [
        "Automated evaluation engine integrations for testing student solutions.",
        "Interactive contest leaderboards updating metrics dynamically.",
        "Detailed performance graphs showing user progression over time."
      ],
      challenges: "Optimized simultaneous submission queries during peak contest hours by refactoring MySQL index columns and configuring efficient Spring Boot connection pooling.",
      accentColor: "from-blue-600 to-indigo-600",
      bgPattern: (
        <div className="absolute inset-0 bg-grid-slate-900 opacity-20 flex items-center justify-center">
          <Code2 className="w-16 h-16 text-blue-500/20" />
        </div>
      )
    },
    {
      id: "voter-verification",
      title: "QR Voter Verification System",
      description: "A smart voter identity validation framework using secure, dynamic QR codes to streamline polling booth authentication.",
      tags: ["React", "Spring Boot", "MongoDB", "Java"],
      githubUrl: "https://github.com/Jayesh2160", // Replace with repository if available
      features: [
        "Encrypted QR generation containing temporary voter session keys.",
        "Local scanning client dashboard verifying registrations instantly.",
        "Strict single-use token checking to prevent duplicate verification."
      ],
      challenges: "Engineered a time-decaying encryption strategy within QR payloads, causing codes to auto-expire after 60 seconds to secure against replay attacks.",
      accentColor: "from-cyan-600 to-blue-600",
      bgPattern: (
        <div className="absolute inset-0 opacity-25 flex items-center justify-center">
          <svg className="w-16 h-16 text-cyan-500/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
          </svg>
        </div>
      )
    },
    {
      id: "chaturang",
      title: "Chaturang Chess Platform",
      description: "An interactive, browser-based chess board featuring full game-rule validation, move notation logging, and local multiplayer support.",
      tags: ["React", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/Jayesh2160/Chaturang",
      features: [
        "Comprehensive board state evaluation for check, checkmate, and stalemates.",
        "Interactive move highlights showing legal destinations dynamically.",
        "Persistent move history panel displaying standard chess notations."
      ],
      challenges: "Structured a light-weight cell mapping state array that validates complex conditions (like pawns en-passant and castling rights) without incurring re-render lag.",
      accentColor: "from-purple-600 to-pink-600",
      bgPattern: (
        <div className="absolute inset-0 opacity-20 flex items-center justify-center">
          <svg className="w-16 h-16 text-purple-500/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v18M15 3v18M3 9h18M3 15h18" />
          </svg>
        </div>
      )
    },
    {
      id: "thinkbook",
      title: "ThinkBook Project Tool",
      status: "Upcoming / In Progress",
      description: "A premium, board-based workspace manager for developers to plan roadmaps, construct sprints, and organize task backlogs.",
      tags: ["React", "TypeScript", "Spring Boot", "MongoDB", "Framer Motion"],
      githubUrl: "https://github.com/Jayesh2160",
      features: [
        "Dynamic Kanban boards with drag-and-drop workflow updates.",
        "Sprint planning modules mapping timeline distributions.",
        "Nested sub-task hierarchy structures for detailed feature breakdown."
      ],
      challenges: "Designing high-performance board drag operations and crafting normalized NoSQL schemas inside MongoDB to resolve multi-level document structures.",
      accentColor: "from-indigo-600 to-cyan-600",
      bgPattern: (
        <div className="absolute inset-0 opacity-25 flex items-center justify-center">
          <Sparkles className="w-14 h-14 text-indigo-500/20" />
        </div>
      )
    }
  ]

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="projects" className="py-24 px-6 relative max-w-5xl mx-auto">
      {/* Decorative Glow */}
      <div className="glow-blur bg-blue-600/5 w-96 h-96 top-1/3 left-1/3 absolute" />

      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase font-sans">
            04. Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
            Featured Projects
          </h3>
          <div className="w-12 h-1 bg-blue-500 rounded mt-3 mx-auto md:mx-0" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id
            return (
              <motion.div
                key={project.id}
                layout="position"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel rounded-2xl overflow-hidden shadow-xl flex flex-col relative group"
              >
                {/* Accent border highlight on group hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-70 transition-opacity" />

                {/* Abstract Visual Placeholder */}
                <div className={`h-48 relative bg-gradient-to-br ${project.accentColor} overflow-hidden flex items-center justify-center border-b border-zinc-900`}>
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-[#030303]/75 z-0" />
                  
                  {/* Abstract Background pattern */}
                  <div className="relative z-10 w-full h-full">
                    {project.bgPattern}
                  </div>

                  {/* Badges / Title overlays */}
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.status && (
                      <span className="px-2.5 py-0.5 bg-blue-500 text-white text-[9px] font-bold tracking-wider rounded-full uppercase shadow-md">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-xs text-zinc-400 font-sans tracking-wide">Featured Work</span>
                    <h4 className="text-lg font-bold font-heading text-white mt-0.5">{project.title}</h4>
                  </div>
                </div>

                {/* Project Brief Info */}
                <div className="p-6 flex flex-col gap-4">
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Technology badging */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-zinc-950 text-zinc-400 text-xs rounded-md border border-zinc-900 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="h-px bg-zinc-800/80 my-1" />

                  {/* Actions / Details toggle */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 font-sans"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                        GitHub
                      </a>
                      
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 font-sans"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer font-heading"
                    >
                      {isExpanded ? (
                        <>
                          Hide Details <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          Read Details <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Expandable Details Container */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-zinc-900/50 bg-zinc-950/40"
                    >
                      <div className="p-6 flex flex-col gap-5 text-left text-sm font-sans">
                        {/* Key Features */}
                        <div>
                          <h5 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Key Features
                          </h5>
                          <ul className="space-y-2 text-zinc-400 text-xs pl-1">
                            {project.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-1.5 leading-relaxed">
                                <span className="text-blue-500 font-semibold">•</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Challenges Solved */}
                        <div>
                          <h5 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <ShieldAlert className="w-3.5 h-3.5 text-blue-400" /> Challenges Solved
                          </h5>
                          <p className="text-zinc-400 text-xs leading-relaxed pl-1">
                            {project.challenges}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
