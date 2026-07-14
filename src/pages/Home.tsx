import React, { Suspense } from "react"
import { Helmet } from "react-helmet-async"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Footer from "@/components/Footer"

// Lazy loaded heavy sections for optimal performance (Lighthouse initial load optimization)
const Education = React.lazy(() => import("@/components/Education"))
const Skills = React.lazy(() => import("@/components/Skills"))
const Projects = React.lazy(() => import("@/components/Projects"))
const Contact = React.lazy(() => import("@/components/Contact"))

// Pulse Skeleton loader for smooth layout mounting
function SectionSkeleton() {
  return (
    <div className="py-24 px-6 max-w-5xl mx-auto w-full animate-pulse flex flex-col gap-8">
      <div className="flex flex-col gap-3 items-center md:items-start">
        <div className="h-4 bg-zinc-900 rounded-full w-24"></div>
        <div className="h-8 bg-zinc-900 rounded-full w-48"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="h-48 bg-zinc-900/50 rounded-2xl border border-zinc-900"></div>
        <div className="h-48 bg-zinc-900/50 rounded-2xl border border-zinc-900"></div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-[#030303] text-zinc-300 min-h-screen relative font-sans selection:bg-blue-600/30 selection:text-white">
      <Helmet>
        <title>Jayesh Khairnar | Portfolio - B.Tech Computer Engineering Student</title>
        <meta name="description" content="Jayesh Khairnar is a B.Tech Computer Engineering student at R. C. Patel Institute of Technology, Shirpur. Specializing in React, TypeScript, Spring Boot, MySQL, and MongoDB." />
        <meta name="keywords" content="Jayesh Khairnar, Portfolio, Computer Engineering, R C Patel Institute of Technology, Spring Boot, React, Developer" />
        <link rel="canonical" href="https://github.com/Jayesh2160" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jayesh Khairnar | Portfolio" />
        <meta property="og:description" content="Personal portfolio of Jayesh Khairnar, presenting competitive programming, voting, and chess projects." />
        <meta property="og:url" content="https://github.com/Jayesh2160" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Jayesh Khairnar | Portfolio" />
        <meta property="twitter:description" content="Personal portfolio of Jayesh Khairnar, presenting projects and skills." />
      </Helmet>

      {/* Navbar */}
      <Navbar />

      {/* Static / Critical Path Sections */}
      <main className="relative z-10">
        <Hero />
        <About />

        {/* Lazy Loaded Sections */}
        <Suspense fallback={<SectionSkeleton />}>
          <Education />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
