export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-[#0a192f]/80 py-6 text-center text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p>© {new Date().getFullYear()} Farel. Crafted with React & Tailwind.</p>
      </div>
    </footer>
  )
}
