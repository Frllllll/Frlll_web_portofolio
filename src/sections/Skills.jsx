import { motion } from 'framer-motion'
import { Code2, ServerCog, Toolbox } from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend',
    icon: <Code2 size={18} className='text-sky-300' />,
    list: ['React', 'Vite', 'Tailwind', 'Bootstrap', 'Html&CSS', 'Next.js'],
  },
  {
    title: 'Design',
    icon: <ServerCog size={18} className='text-sky-300' />,
    list: ['Canva', 'Alight Motion', 'Adobe Photoshop', 'Snapseed', 'Filmora', 'Pixellab'],
  },
  {
    title: 'Tools',
    icon: <Toolbox size={18} className='text-sky-300' />,
    list: ['Git', 'GitHub', 'Vercel', 'Docker', 'Jira', 'Figma'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="mb-8 text-3xl font-bold text-slate-100">Skills</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                whileHover={{ y: -6, boxShadow: '0 18px 35px rgba(59,130,246,0.2)' }}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-lg transition"
              >
                <div className='mb-3 flex items-center gap-2 text-slate-100'>
                  {group.icon}
                  <h3 className='text-xl font-semibold'>{group.title}</h3>
                </div>
                <ul className='space-y-2 text-slate-200'>
                  {group.list.map((skill) => (
                    <li key={skill} className='rounded-lg bg-[#112240] px-3 py-2 text-sm text-slate-100 transition hover:bg-sky-950/35'>
                      {skill}
                    </li>
                  ))}   
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}




