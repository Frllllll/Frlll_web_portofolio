import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-3xl font-bold text-slate-100">Contact</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/80 bg-white/5 p-6 backdrop-blur-lg">
              <h3 className="mb-3 text-xl font-semibold text-sky-300">
                Get in touch
              </h3>
              <p className="mb-4 text-slate-300">
                Send a message and let’s build innovative products together.
              </p>
              <ul className="space-y-3 text-slate-200">
                <li>Email: mochfarelalfachrezi@gmail.com</li>
                <li>Instagram : frl_alf14</li>
                <li>Tiktok : leorenal</li>
              </ul>
            </div>
            <form className="rounded-2xl border border-slate-800/80 bg-white/5 p-6 backdrop-blur-lg">
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mb-4 w-full rounded-lg border border-slate-700 bg-[#112240] px-3 py-2 text-slate-100 outline-none focus:border-sky-500"
              />
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="mb-4 w-full rounded-lg border border-slate-700 bg-[#112240] px-3 py-2 text-slate-100 outline-none focus:border-sky-500"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Send message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
