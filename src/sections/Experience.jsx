import { motion } from "framer-motion";

const timeline = [
  {
    year: "2019",
    role: "SDIT Imam Syafi'i Petanahan",
    
  },
  {
    year: "2022",
    role: "SMP Islam Rengasdengklok",
   
  },
  {
    year: "2025",
    role: "SMAN 1 Rengasdengklok",
    
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 text-3xl font-bold text-slate-100">Experience</h2>
          <div className="relative border-l border-slate-700/80 pl-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="mb-10 relative"
              >
                <span className="absolute -left-5 top-1 h-4 w-4 rounded-full bg-sky-400 outline outline-slate-900" />
                <p className="text-sm font-semibold uppercase text-sky-300">
                  {item.year}
                </p>
                <h3 className="text-xl font-semibold text-slate-100">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-slate-300">
                  {item.company}
                </p>
                <p className="mt-2 text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
