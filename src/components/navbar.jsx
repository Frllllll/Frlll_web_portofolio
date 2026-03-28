import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const fromTop = window.scrollY + 170;
      const section = navItems
        .map((item) => document.getElementById(item.id))
        .find((el) => el && el.offsetTop <= fromTop);
      if (section) setActive(section.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id) => {
    setMobileOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-[#0a192f]/80 border-b border-white/10"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          onClick={() => handleNav("home")}
          className="text-lg font-bold tracking-wide text-sky-300"
        >
          Kiromiya
        </button>

        <nav className="hidden items-center gap-2 sm:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`px-3 py-2 text-sm font-medium transition ${
                active === item.id
                  ? "text-sky-300"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden gap-3 text-slate-300 sm:flex">
          <a
            href="https://github.com/Frllllll"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} className="hover:text-sky-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/moch-farel-alfachrezi-874919378/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} className="hover:text-sky-300" />
          </a>
          <a href="mailto:mochfarelalfachrezi@gmail.com"
            target="_blank"
            rel="noreferrer"
             aria-label="Email">
            <Mail size={18} className="hover:text-sky-300" />
          </a>
        </div>

        <button
          className="sm:hidden text-slate-300"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto flex max-w-6xl flex-col gap-2 px-5 pb-4 sm:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`w-full rounded-lg px-4 py-2 text-left text-slate-200 transition hover:bg-sky-700/20 ${
                active === item.id ? "text-sky-300" : "text-slate-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
