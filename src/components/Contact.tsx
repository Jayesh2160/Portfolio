import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

// Zod Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call to Resend/EmailJS with real-world latency
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // If message contains the word 'error', simulate a network failure
          if (data.message.toLowerCase().includes("error")) {
            reject(new Error("Simulated network failure"))
          } else {
            resolve(true)
          }
        }, 1500)
      })

      setSubmitStatus("success")
      reset()
    } catch (err) {
      console.error("Submission error:", err)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 relative max-w-5xl mx-auto">
      {/* Decorative Blob */}
      <div className="glow-blur bg-blue-600/5 w-80 h-80 bottom-10 right-10 absolute" />

      <div className="flex flex-col gap-12">
        {/* Section Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase font-sans">
            05. Inquiry
          </h2>
          <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
            Get In Touch
          </h3>
          <div className="w-12 h-1 bg-blue-500 rounded mt-3 mx-auto md:mx-0" />
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Contact Details */}
          <div className="md:col-span-5 flex flex-col gap-6 text-zinc-400 font-sans">
            <h4 className="text-lg font-bold font-heading text-white mb-2">
              Let's connect
            </h4>
            <p className="text-sm leading-relaxed">
              Have a role suggestion, project inquiry, or just want to talk about software development or chess? Send a message and I'll respond as soon as possible.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Email Me</p>
                  <a
                    href="mailto:jayukhairnar20@gmail.com"
                    className="text-sm text-zinc-200 hover:text-white transition-colors font-medium"
                  >
                    jayukhairnar20@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Location</p>
                  <p className="text-sm text-zinc-200 font-medium">
                    R. C. Patel Campus, Shirpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center gap-3 text-sm font-sans"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-rose-950/20 border border-rose-500/20 text-rose-400 rounded-xl flex items-center gap-3 text-sm font-sans"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>Failed to deliver message. Check internet or try again.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name Input */}
                <div className="flex flex-col gap-1.5 text-left font-sans">
                  <label htmlFor="name" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider pl-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    placeholder="Enter your name"
                    className={`w-full bg-zinc-950 text-white border ${
                      errors.name ? "border-rose-500/50 focus:border-rose-500" : "border-zinc-800 focus:border-blue-500"
                    } px-4 py-3 rounded-xl text-sm font-medium outline-none transition-colors placeholder:text-zinc-600`}
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-500 font-medium pl-1 mt-0.5">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-1.5 text-left font-sans">
                  <label htmlFor="email" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider pl-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="name@example.com"
                    className={`w-full bg-zinc-950 text-white border ${
                      errors.email ? "border-rose-500/50 focus:border-rose-500" : "border-zinc-800 focus:border-blue-500"
                    } px-4 py-3 rounded-xl text-sm font-medium outline-none transition-colors placeholder:text-zinc-600`}
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-500 font-medium pl-1 mt-0.5">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-1.5 text-left font-sans">
                  <label htmlFor="message" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider pl-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    placeholder="How can I help you? (Type 'error' to test failure states)"
                    className={`w-full bg-zinc-950 text-white border ${
                      errors.message ? "border-rose-500/50 focus:border-rose-500" : "border-zinc-800 focus:border-blue-500"
                    } px-4 py-3 rounded-xl text-sm font-medium outline-none transition-colors placeholder:text-zinc-600 resize-none`}
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-500 font-medium pl-1 mt-0.5">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
