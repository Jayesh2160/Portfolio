import { motion } from "framer-motion"
import { Calendar, Award, BookOpen, GraduationCap } from "lucide-react"

export default function Education() {
  const educationItems = [
    {
      institution: "R. C. Patel Institute of Technology, Shirpur",
      degree: "Bachelor of Technology in Computer Engineering",
      period: "2023 - 2027 (Expected Graduation)",
      status: "Fourth Year (Candidacy)",
      cgpa: "8.84 CGPA",
      details: [
        "Maintaining a strong academic record with a current CGPA of 8.84.",
        "Focused on data structures, advanced algorithms, and systems engineering.",
        "Active member of departmental coding clusters and tech workshops.",
        "Consistently engaged in designing mock products and software architectures.",
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "Database Management Systems",
        "Web Development Technologies",
        "Software Engineering",
        "Operating Systems",
      ],
    },
  ]

  const certifications = [
    {
      title: "Active Programming",
      provider: "LeetCode & CodeChef",
      description: "Practiced coding challenges on competitive programming platforms.",
      icon: Award,
    },
    {
      title: "Full-Stack Project Development",
      provider: "Self-Paced & Academic Projects",
      description: "Successfully built projects using Java Spring Boot, React, and databases, emphasizing secure voter verification and coding challenges platforms.",
      icon: BookOpen,
    },
  ]

  return (
    <section id="education" className="py-24 px-6 relative max-w-5xl mx-auto">
      {/* Glow effect */}
      <div className="glow-blur bg-blue-600/5 w-72 h-72 bottom-10 left-10 absolute" />

      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase font-sans">
            02. Academic Path
          </h2>
          <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
            Education & Focus
          </h3>
          <div className="w-12 h-1 bg-blue-500 rounded mt-3 mx-auto md:mx-0" />
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Institution Card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {educationItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col gap-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-heading text-white leading-snug">
                        {item.institution}
                      </h4>
                      <p className="text-sm text-zinc-300 font-heading font-medium mt-0.5">
                        {item.degree}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end text-left sm:text-right shrink-0">
                    <span className="text-xs text-zinc-500 font-sans flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <div className="flex flex-wrap gap-2 sm:justify-end mt-1.5">
                      <span className="inline-block px-2.5 py-0.5 bg-blue-950/30 text-blue-400 text-[10px] font-semibold rounded-full border border-blue-500/20 w-max">
                        {item.status}
                      </span>
                      {item.cgpa && (
                        <span className="inline-block px-2.5 py-0.5 bg-emerald-950/30 text-emerald-400 text-[10px] font-semibold rounded-full border border-emerald-500/20 w-max">
                          {item.cgpa}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-zinc-800/80" />

                {/* Details */}
                <div>
                  <h5 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3 font-sans">
                    Key Highlights
                  </h5>
                  <ul className="space-y-2 text-sm text-zinc-400 font-sans list-disc list-inside">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">
                        <span className="pl-1 text-zinc-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coursework Tags */}
                <div>
                  <h5 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3 font-sans">
                    Relevant Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 bg-zinc-950 text-zinc-400 hover:text-zinc-200 text-xs font-medium rounded-lg border border-zinc-900 transition-colors font-sans"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary Details (Achievements & Highlights) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1 pl-1 font-sans">
              Core Competencies & Focus
            </h4>

            {certifications.map((cert, cIdx) => {
              const IconComponent = cert.icon
              return (
                <motion.div
                  key={cIdx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: cIdx * 0.1 }}
                  className="glass-panel p-5 rounded-2xl flex gap-4 items-start relative overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1 font-sans">
                    <span className="text-xs text-zinc-500">{cert.provider}</span>
                    <h5 className="text-sm font-semibold font-heading text-white">
                      {cert.title}
                    </h5>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
