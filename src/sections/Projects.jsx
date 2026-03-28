import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from './projects.1'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="mb-8 text-3xl font-bold text-slate-100">Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59,130,246,0.2)' }}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-5 backdrop-blur-lg"
              >
                <div className="relative mb-4 h-40 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                <p className="my-2 text-sm text-slate-300">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-sky-500/20 px-3 py-1 text-xs text-sky-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
                  >
  <ExternalLink size={14} /> Pinterest
                  </a>
                  <a
                    href={project.image}
                    download=""
                    className="inline-flex items-center gap-1 rounded-md bg-sky-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-sky-400"
                  >
                    <ExternalLink size={14} /> Download
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
