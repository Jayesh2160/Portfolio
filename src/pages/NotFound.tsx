import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Terminal, AlertCircle } from "lucide-react"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans select-none">
      {/* Decorative Blob */}
      <div className="glow-blur bg-blue-600/10 w-96 h-96 absolute" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-lg w-full text-center relative z-10 flex flex-col items-center gap-6"
      >
        {/* Error code */}
        <h1 className="text-8xl font-black font-heading tracking-tight text-white select-none">
          404
        </h1>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold font-heading text-white">
            Looks like you made an illegal move.
          </h2>
          <p className="text-sm text-zinc-400 max-w-sm">
            The resource you are looking for has been moved, renamed, or doesn't exist.
          </p>
        </div>

        {/* Mock Terminal Card */}
        <div className="w-full text-left bg-zinc-950/80 border border-zinc-900 rounded-xl overflow-hidden shadow-2xl mt-2 font-mono text-xs">
          {/* Header */}
          <div className="bg-zinc-900/60 px-4 py-2 flex items-center gap-1.5 border-b border-zinc-900/80">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-zinc-500 text-[10px] ml-2 flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5" /> bash
            </span>
          </div>
          {/* Body */}
          <div className="p-4 flex flex-col gap-2 text-zinc-400 select-text">
            <div>
              <span className="text-emerald-500">jayesh@portfolio</span>
              <span className="text-zinc-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$</span> git checkout route-path
            </div>
            <div className="text-rose-500 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>error: pathspec 'route-path' did not match any file(s) known to git.</span>
            </div>
            <div className="text-zinc-600 mt-1 animate-pulse">_</div>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="btn-primary flex items-center gap-2 group mt-4 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Home
        </button>
      </motion.div>
    </div>
  )
}
