import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Mail, FileText, Code2 } from "lucide-react"

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.1),rgba(255,255,255,0))]" />
      
      {/* Glowing Blob */}
      <div className="glow-blur bg-blue-600 w-96 h-96 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl flex flex-col items-center gap-6"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/25 bg-blue-950/20 text-blue-400 text-xs font-medium backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
          <span>Available for Frontend / Backend / Fullstack Roles</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-white leading-[1.1] max-w-2xl text-center"
        >
          Jayesh Khairnar
        </motion.h1>

        {/* Sub-headline */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl font-heading font-medium text-zinc-300 tracking-tight"
        >
          B.Tech Computer Engineering Student
        </motion.h2>

        {/* Brief Narrative */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-zinc-400 max-w-xl font-sans"
        >
          Focused on building clean, high-performance, and responsive digital solutions. Currently studying at{" "}
          <span className="text-zinc-200 font-medium">R. C. Patel Institute of Technology, Shirpur</span>.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mt-4"
        >
          <button
            onClick={() => handleScrollTo("projects")}
            className="btn-primary flex items-center gap-2 group cursor-pointer"
          >
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={() => handleScrollTo("contact")}
            className="btn-secondary flex items-center gap-2 cursor-pointer"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-5 mt-10"
        >
          <a
            href="https://github.com/Jayesh2160"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-md"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jayesh-khairnar-325933293/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-md"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:jayukhairnar20@gmail.com"
            className="p-2.5 rounded-full border border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-md"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://leetcode.com/u/Jayesh_Vedu_Khairnar/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-md"
            aria-label="LeetCode"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.111.696-1.744.696a2.285 2.285 0 0 1-1.744-.696L3.92 14.786a2.454 2.454 0 0 1 0-3.523l6.005-5.753c.466-.45 1.111-.696 1.744-.696.633 0 1.277.245 1.744.696l2.69 2.607c.904.877.904 2.298 0 3.176l-4.148 4.02a.707.707 0 0 1-1.002 0 .707.707 0 0 1 0-1.002l4.148-4.02a.856.856 0 0 0 0-1.172l-2.69-2.607a.888.888 0 0 0-1.185 0l-6.005 5.753a1.037 1.037 0 0 0 0 1.517l6.005 5.753c.311.3.874.3 1.185 0l2.69-2.607a.856.856 0 0 0 0-1.172.707.707 0 0 1 1.002-1.002c.904.877.904 2.298 0 3.176z"/>
              <path d="M22.56 12c0 .647-.525 1.17-1.17 1.17h-3.414c-.646 0-1.17-.523-1.17-1.17a1.17 1.17 0 0 1 1.17-1.17h3.414c.645 0 1.17.523 1.17 1.17z"/>
            </svg>
          </a>
          <a
            href="https://www.codechef.com/users/jayeshkh11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-md"
            aria-label="CodeChef"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <Link
            to="/resume"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-zinc-800 bg-zinc-950/40 text-sm text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-md font-sans"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4" />
            Resume
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
