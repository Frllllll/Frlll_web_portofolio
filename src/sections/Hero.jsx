import { motion } from 'framer-motion'
import { GithubIcon, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-20 bg-linear-to-t from-[#020817] via-[#0a192f] to-[#0f172a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,.25),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(96,165,250,.2),transparent_30%)]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, idx) => (
          <span
            key={idx}
            className={`particle particle-${idx % 4}`}
            style={{
              left: `${(idx * 7 + 5) % 100}%`,
              top: `${(idx * 13 + 10) % 100}%`,
              animationDelay: `${(idx * 0.12).toFixed(2)}s`,
            }}
          />
        ))}
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-6 text-center sm:text-left"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400/80">Hello, I’m a developer</p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-100 sm:text-6xl">
            I build futuristic web experiences
          </h1>
          <p className="max-w-2xl text-slate-300 sm:text-lg">
            Frontend / Fullstack engineer with a passion for premium UI, performance, and smooth motion-led UX.
          </p>
          <div className="mx-auto flex w-fit gap-3 sm:mx-0">
            <a
              href="#projects"
              className="rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(59,130,246,0.35)] transition hover:bg-sky-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-7 flex items-center justify-center gap-4 sm:justify-start text-slate-200">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-sky-300">
              <GithubIcon size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-sky-300">
              <Linkedin size={22} />
            </a>
            <a href="mailto:mochfarelalfachrezi@gmail.com" aria-label="Email" className="hover:text-sky-300">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

      <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-white/5 shadow-[0_20px_60px_rgba(10,25,47,0.4)]"
        >
          <motion.div
            animate={{
              rotateY: [-1, 1, -1],
              y: [0, -2, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}

            className="h-full w-full p-0 m-0 grid grid-cols-1 gap-0 place-items-stretch"
          >
            <img
              src="/dist/assets/proyek/hero.png"
              alt="Developer profile"
              className="h-full w-full rounded-[inherit] object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            
          </motion.div>
          <div className="absolute bottom-4 left-4 rounded-lg bg-[#0a192f]/70 px-3 py-1.5 text-xs font-medium text-slate-100">
            Creative Frontend Engineer
          </div>
        </motion.div>

        
      </div>
    </section>
  )
}
