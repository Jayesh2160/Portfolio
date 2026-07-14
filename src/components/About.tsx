import { motion } from "framer-motion"
import { Code2, Cpu, GraduationCap, Heart } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <section id="about" className="py-24 px-6 relative max-w-5xl mx-auto">
      {/* Decorative Blob */}
      <div className="glow-blur bg-blue-600/5 w-72 h-72 top-1/2 right-0 absolute" />

      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase font-sans">
            01. Background
          </h2>
          <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
            About Me
          </h3>
          <div className="w-12 h-1 bg-blue-500 rounded mt-3 mx-auto md:mx-0" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Narrative */}
          <div className="md:col-span-7 flex flex-col gap-6 text-zinc-400 text-base leading-relaxed font-sans">
            <p>
              Hi, I'm <span className="text-white font-medium">Jayesh Khairnar</span>, a passionate software engineer currently in my fourth year pursuing a B.Tech in Computer Engineering at{" "}
              <span className="text-zinc-200 font-medium">R. C. Patel Institute of Technology, Shirpur</span>.
            </p>
            <p>
              My interest in technology started with exploring how complex web systems work. Over the last four years, this curiosity has turned into structured coding practices focused on building responsive, highly functional applications that solve real-world problems.
            </p>
            <p>
              Whether developing competitive programming tools like <span className="text-white font-medium">RankQuest</span>, creating interactive gaming platforms like <span className="text-white font-medium">Chaturang</span>, or securing public workflows using cryptography, I approach engineering with a focus on clean architectures, intuitive user interfaces, and robust backend logic.
            </p>
            <p>
              Outside of standard class projects, I focus on refining my skills in Java, React, TypeScript, and database optimization, striving to bridge the gap between frontend aesthetics and backend stability.
            </p>
          </div>

          {/* Quick Info Grid / Visual Showcase */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-5 grid grid-cols-2 gap-4"
          >
            {/* Academic Card */}
            <motion.div
              variants={cardVariants}
              className="glass-panel p-5 rounded-2xl flex flex-col gap-3 relative overflow-hidden"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-950/40 border border-blue-500/25 flex items-center justify-center text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold font-heading text-white">Education</h4>
              <p className="text-xs text-zinc-500 font-sans">
                Fourth Year B.Tech Computer Engineering Student
              </p>
            </motion.div>

            {/* Architecture Card */}
            <motion.div
              variants={cardVariants}
              className="glass-panel p-5 rounded-2xl flex flex-col gap-3 relative overflow-hidden"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-950/40 border border-blue-500/25 flex items-center justify-center text-blue-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold font-heading text-white">Fullstack</h4>
              <p className="text-xs text-zinc-500 font-sans">
                Modern frontend web frameworks & Java Spring Boot microservices
              </p>
            </motion.div>

            {/* Code Quality Card */}
            <motion.div
              variants={cardVariants}
              className="glass-panel p-5 rounded-2xl flex flex-col gap-3 relative overflow-hidden"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-950/40 border border-blue-500/25 flex items-center justify-center text-blue-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold font-heading text-white">Clean Code</h4>
              <p className="text-xs text-zinc-500 font-sans">
                Writing modular, accessible, testable, and self-documenting code
              </p>
            </motion.div>

            {/* Interests Card */}
            <motion.div
              variants={cardVariants}
              className="glass-panel p-5 rounded-2xl flex flex-col gap-3 relative overflow-hidden"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-950/40 border border-blue-500/25 flex items-center justify-center text-blue-400">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold font-heading text-white">Hobbies</h4>
              <p className="text-xs text-zinc-500 font-sans">
                Competitive programming, Chess strategies & open-source tools
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
