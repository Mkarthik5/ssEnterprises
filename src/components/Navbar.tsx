"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SSLogo } from "./SSLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "glass-dark border-b border-[rgba(196,30,58,0.08)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <SSLogo size={36} />
              <div className="hidden sm:block leading-none">
                <p
                  className="font-playfair text-[11px] tracking-[0.35em] uppercase"
                  style={{ color: "#F08080" }}
                >
                  Sri Sahasra
                </p>
                <p
                  className="font-inter text-[9px] tracking-[0.45em] uppercase mt-0.5"
                  style={{ color: "#6B6B6B" }}
                >
                  Enterprises
                </p>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-inter text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 group ${
                    pathname === link.href
                      ? "text-gradient-gold"
                      : "text-silver hover:text-cream"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-500 ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                    style={{
                      background:
                        "linear-gradient(90deg, #F08080, #C41E3A)",
                    }}
                  />
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center px-6 py-2.5 font-inter text-[10px] tracking-[0.25em] uppercase font-medium transition-all duration-400 gold-border-bright text-gold hover:bg-gold hover:text-obsidian"
                style={{ color: "#C41E3A" }}
              >
                Get Quote
              </Link>

              <button
                className="lg:hidden p-2 text-cream"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-10"
            style={{ backgroundColor: "#080808" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Decorative glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(196,30,58,0.08) 0%, transparent 70%)",
              }}
            />

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08 + 0.15, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className={`font-playfair text-5xl font-700 transition-all duration-300 ${
                    pathname === link.href
                      ? "text-gradient-gold"
                      : "text-cream hover:text-gradient-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/contact"
                className="mt-4 px-10 py-4 font-inter text-[11px] tracking-[0.3em] uppercase font-medium gold-border-bright transition-all duration-300 hover:bg-gold hover:text-obsidian"
                style={{ color: "#C41E3A" }}
              >
                Get Quote
              </Link>
            </motion.div>

            {/* Social + contact bottom */}
            <motion.div
              className="absolute bottom-8 left-0 right-0 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p
                className="font-inter text-[10px] tracking-[0.3em] uppercase"
                style={{ color: "#6B6B6B" }}
              >
                +91 7995733962
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
