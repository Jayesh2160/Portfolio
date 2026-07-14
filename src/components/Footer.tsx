
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-zinc-900 bg-[#030303] py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-white font-heading font-semibold tracking-tight">
            Jayesh Khairnar
          </p>
          <p className="text-xs text-zinc-500 font-sans">
            B.Tech Computer Engineering Student
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Jayesh2160"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white transition-colors font-sans"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jayesh-khairnar-325933293/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white transition-colors font-sans"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jayukhairnar20@gmail.com"
            className="text-sm text-zinc-400 hover:text-white transition-colors font-sans"
          >
            Email
          </a>
          <a
            href="https://leetcode.com/u/Jayesh_Vedu_Khairnar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white transition-colors font-sans"
          >
            LeetCode
          </a>
          <a
            href="https://www.codechef.com/users/jayeshkh11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white transition-colors font-sans"
          >
            CodeChef
          </a>
        </div>

        {/* Copyright & Top */}
        <div className="flex flex-col items-center md:items-end gap-2 font-sans">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} Jayesh Khairnar. All rights reserved.
          </p>
          <button
            onClick={handleBackToTop}
            className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
          >
            Back to Top
            <svg xmlns="http://www.w3.org/205" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
