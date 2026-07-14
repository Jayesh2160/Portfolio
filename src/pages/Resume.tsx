import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Printer, Mail, Phone, Code2 } from "lucide-react"

export default function Resume() {
  const navigate = useNavigate()

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 py-12 px-4 sm:px-6 print:bg-white print:text-black print:py-0 print:px-0 font-sans">
      <Helmet>
        <title>Jayesh Khairnar | Resume</title>
        <meta name="description" content="Resume of Jayesh Khairnar, B.Tech Computer Engineering student." />
      </Helmet>

      {/* Floating Control Bar - Hidden when printing */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between gap-4 print:hidden">
        <button
          onClick={() => navigate("/")}
          className="btn-secondary py-2 px-4 flex items-center gap-2 text-xs font-semibold cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Portfolio
        </button>

        <button
          onClick={handlePrint}
          className="btn-primary py-2 px-5 flex items-center gap-2 text-xs font-semibold cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5" />
          Print / Save PDF
        </button>
      </div>

      {/* Resume Document Wrapper */}
      <main className="max-w-4xl mx-auto bg-[#09090b] border border-zinc-900 shadow-2xl rounded-2xl p-8 sm:p-12 print:border-none print:shadow-none print:bg-white print:text-black print:p-0 print:rounded-none">
        
        {/* Header Block */}
        <header className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-zinc-800 print:border-zinc-300">
          <div className="flex flex-col gap-1.5 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white print:text-black tracking-tight uppercase">
              Khairnar Jayesh
            </h1>
            <p className="text-sm font-medium text-blue-400 print:text-blue-700 tracking-wide font-sans">
              Fourth Year B.Tech Computer Engineering Student
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-zinc-400 print:text-zinc-700 font-sans shrink-0">
            <a href="tel:+917517486936" className="flex items-center gap-2 hover:text-white print:hover:text-zinc-700 transition-colors">
              <Phone className="w-3.5 h-3.5 text-zinc-500 print:text-zinc-400" />
              <span>+91 7517486936</span>
            </a>
            <a href="mailto:jayukhairnar20@gmail.com" className="flex items-center gap-2 hover:text-white print:hover:text-zinc-700 transition-colors">
              <Mail className="w-3.5 h-3.5 text-zinc-500 print:text-zinc-400" />
              <span>jayukhairnar20@gmail.com</span>
            </a>
            <a href="https://github.com/Jayesh2160" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white print:hover:text-zinc-700 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current text-zinc-500 print:text-zinc-400" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>github.com/Jayesh2160</span>
            </a>
            <a href="https://www.linkedin.com/in/jayesh-khairnar-325933293/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white print:hover:text-zinc-700 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current text-zinc-500 print:text-zinc-400" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>linkedin.com/in/jayesh-khairnar-325933293</span>
            </a>
            <a href="https://codechef.com/users/jayeshkh11" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white print:hover:text-zinc-700 transition-colors">
              <Code2 className="w-3.5 h-3.5 text-zinc-500 print:text-zinc-400" />
              <span>codechef.com/users/jayeshkh11</span>
            </a>
            <a href="https://leetcode.com/u/Jayesh_Vedu_Khairnar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white print:hover:text-zinc-700 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current text-zinc-500 print:text-zinc-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.111.696-1.744.696a2.285 2.285 0 0 1-1.744-.696L3.92 14.786a2.454 2.454 0 0 1 0-3.523l6.005-5.753c.466-.45 1.111-.696 1.744-.696.633 0 1.277.245 1.744.696l2.69 2.607c.904.877.904 2.298 0 3.176l-4.148 4.02a.707.707 0 0 1-1.002 0 .707.707 0 0 1 0-1.002l4.148-4.02a.856.856 0 0 0 0-1.172l-2.69-2.607a.888.888 0 0 0-1.185 0l-6.005 5.753a1.037 1.037 0 0 0 0 1.517l6.005 5.753c.311.3.874.3 1.185 0l2.69-2.607a.856.856 0 0 0 0-1.172.707.707 0 0 1 1.002-1.002c.904.877.904 2.298 0 3.176z"/>
                <path d="M22.56 12c0 .647-.525 1.17-1.17 1.17h-3.414c-.646 0-1.17-.523-1.17-1.17a1.17 1.17 0 0 1 1.17-1.17h3.414c.645 0 1.17.523 1.17 1.17z"/>
              </svg>
              <span>leetcode.com/u/Jayesh_Vedu_Khairnar</span>
            </a>
          </div>
        </header>

        {/* About Section */}
        <section className="mt-6">
          <h2 className="text-xs font-bold text-zinc-400 print:text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-1.5 mb-3 print:border-zinc-200">
            About
          </h2>
          <p className="text-xs text-zinc-400 print:text-zinc-800 leading-relaxed font-sans">
            Computer Engineering student seeking software development opportunities. Skilled in Java Full-Stack Development with knowledge of Core Java, Spring Boot, React.js, MySQL, and Data Structures & Algorithms. Possesses strong problem-solving abilities, hands-on project experience, and a passion for developing efficient and scalable software solutions.
          </p>
        </section>

        {/* Education Section */}
        <section className="mt-6">
          <h2 className="text-xs font-bold text-zinc-400 print:text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-1.5 mb-3 print:border-zinc-200">
            Education
          </h2>
          <div className="flex flex-col gap-4 font-sans text-xs">
            {/* B.Tech */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-bold text-white print:text-black">
                  B.Tech (Computer Engineering)
                </h3>
                <p className="text-zinc-400 print:text-zinc-700">
                  R. C. Patel Institute of Technology, Shirpur – <span className="font-medium text-zinc-300 print:text-zinc-900">CGPA 8.77</span> (up to 5th Semester)
                </p>
              </div>
              <span className="text-zinc-500 print:text-zinc-600 font-medium shrink-0">2023 - 2027</span>
            </div>

            {/* Junior College */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-bold text-white print:text-black">
                  Junior College (Higher Secondary School)
                </h3>
                <p className="text-zinc-400 print:text-zinc-700">
                  R. C. Patel Junior College, Shirpur – <span className="font-medium text-zinc-300 print:text-zinc-900">HSC 87%</span>
                </p>
              </div>
              <span className="text-zinc-500 print:text-zinc-600 font-medium shrink-0">2021 - 2023</span>
            </div>

            {/* Primary & Secondary */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-bold text-white print:text-black">
                  Primary And Secondary School Education
                </h3>
                <p className="text-zinc-400 print:text-zinc-700">
                  R. C. Patel Secondary School, Shirpur – <span className="font-medium text-zinc-300 print:text-zinc-900">SSC 96.40%</span>
                </p>
              </div>
              <span className="text-zinc-500 print:text-zinc-600 font-medium shrink-0">2011 - 2021</span>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mt-6">
          <h2 className="text-xs font-bold text-zinc-400 print:text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-1.5 mb-3 print:border-zinc-200">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs text-zinc-400 print:text-zinc-800">
            <div>
              <span className="font-bold text-white print:text-black">Programming Languages:</span> C, C++, Java, Python
            </div>
            <div>
              <span className="font-bold text-white print:text-black">Backend Development:</span> Spring Boot, JDBC, Node.js, Express.js
            </div>
            <div>
              <span className="font-bold text-white print:text-black">Frontend Development:</span> HTML, CSS, JavaScript, React.js
            </div>
            <div>
              <span className="font-bold text-white print:text-black">Database Management:</span> MySQL, MongoDB
            </div>
            <div className="sm:col-span-2">
              <span className="font-bold text-white print:text-black">Platforms & Tools:</span> Git, GitHub, IntelliJ IDE, VS Code, Postman, Jenkins
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-6">
          <h2 className="text-xs font-bold text-zinc-400 print:text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-1.5 mb-3 print:border-zinc-200">
            Projects
          </h2>
          <div className="flex flex-col gap-5 font-sans text-xs">
            {/* Chaturang */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white print:text-black">1. Chaturang (Chess Platform)</h3>
                <span className="text-zinc-500 print:text-zinc-600 font-mono text-[10px]">React, Spring Boot, MySQL</span>
              </div>
              <p className="text-zinc-400 print:text-zinc-700 italic text-[11px] mb-1">
                Technologies: Java, Spring Boot, MySQL, React.js, Stockfish API
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-400 print:text-zinc-800 pl-1 leading-relaxed">
                <li>Built a web-based chess simulator to help beginners learn and practice chess interactively.</li>
                <li>Enabled users to improve chess skills through gameplay and practice scenarios.</li>
                <li>Developed a robust backend with Spring Boot and integrated database models for user data and game state management.</li>
              </ul>
            </div>

            {/* RankQuest */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white print:text-black">2. RankQuest: Competitive Coding Platform For College Students</h3>
                <span className="text-zinc-500 print:text-zinc-600 font-mono text-[10px]">React, Spring Boot, MySQL</span>
              </div>
              <p className="text-zinc-400 print:text-zinc-700 italic text-[11px] mb-1">
                Technologies: Java, Spring Boot, React.js, MySQL, Judge0 API
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-400 print:text-zinc-800 pl-1 leading-relaxed">
                <li>Developed a responsive coding platform with an online code editor, DSA challenges, and real-time code compilation and execution using the Judge0 API.</li>
                <li>Implemented user authentication, submission tracking, and global/college leaderboards.</li>
                <li>Role: Backend Developer responsible for API development and database integration.</li>
              </ul>
            </div>

            {/* QR Voter Verification */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white print:text-black">3. QR Based Voter Verification System</h3>
                <span className="text-zinc-500 print:text-zinc-600 font-mono text-[10px]">MERN (React, Node, Mongo)</span>
              </div>
              <p className="text-zinc-400 print:text-zinc-700 italic text-[11px] mb-1">
                Technologies: MongoDB, Express.js, React.js, Node.js
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-400 print:text-zinc-800 pl-1 leading-relaxed">
                <li>Developed a MERN-based voter verification system with secure voter registration and authentication.</li>
                <li>Implemented QR code generation and scanning for quick voter verification and validation.</li>
                <li>Role: Backend Developer and UI/UX Designer.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mt-6">
          <h2 className="text-xs font-bold text-zinc-400 print:text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-1.5 mb-3 print:border-zinc-200">
            Certifications
          </h2>
          <ul className="list-disc list-inside space-y-1 font-sans text-xs text-zinc-400 print:text-zinc-800 leading-relaxed">
            <li><span className="font-bold text-white print:text-black">Java Full Stack Development</span> – Code for Success</li>
            <li><span className="font-bold text-white print:text-black">Postman API Fundamentals</span> Student Expert</li>
            <li><span className="font-bold text-white print:text-black">Advanced Functional Data Structures and Algorithms</span> - Infosys Springboard</li>
          </ul>
        </section>

        {/* Achievements Section */}
        <section className="mt-6 pb-2 print:pb-0">
          <h2 className="text-xs font-bold text-zinc-400 print:text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-1.5 mb-3 print:border-zinc-200">
            Achievements
          </h2>
          <ul className="list-disc list-inside space-y-1 font-sans text-xs text-zinc-400 print:text-zinc-800 leading-relaxed">
            <li>Club Communicado member at RCPIT.</li>
            <li>Organized soft-skill and communication-based workshops under Club Communicado.</li>
          </ul>
        </section>

      </main>
    </div>
  )
}
