import { motion } from "framer-motion";

const strengths = [
"Responsive Web Design & Mobile First",
  "React + TypeScript",
  "UI/UX Performance",
  "Cloud Integration",
  "API Design",
  "Team Collaboration",
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-3 text-3xl font-bold text-slate-100">About Me</h2>
          <p className="mb-8 max-w-3xl text-slate-300 sm:text-lg">
            I’m a frontend engineer with a proven track record building
            next-level digital products. I love blending clean code, modern
            visuals, and motion-driven interactions.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/70 bg-white/5 p-6 backdrop-blur-lg">
              <div className="mb-5 flex items-center gap-4">
              <img
                  src="/dist/assets/proyek/gw.png"
                  alt="Profile photo"
                  className="h-20 w-20 rounded-full object-cover object-[-50%_20%] ring-2 ring-sky-400/50 shadow-lg"
                />
  
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Hi, I’m Moch Farel Alfachrezi
                  </p>
                  <p className="text-xs text-slate-400"s>Frontend & Backend</p>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-sky-300">Story</h3>
              <p className="text-slate-300">
                Fresh graduates in 2025 with interests and skills in graphic
                design, video editing, and programming fundamentals. Familiar
                with using various creative tools to produce engaging and
                communicative visual content. Fast learners, detail-oriented,
                and able to work both individually and in a team.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800/70 bg-white/5 p-6 backdrop-blur-lg">
              <h3 className="mb-3 text-xl font-semibold text-sky-300">
                Core strengths
              </h3>
              <ul className="grid gap-2 text-slate-200">
                {strengths.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-slate-900/40 px-3 py-2 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
