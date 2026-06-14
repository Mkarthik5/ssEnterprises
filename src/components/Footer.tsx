"use client";

import Link from "next/link";
import { SSLogoMark } from "./SSLogo";

const footerLinks = {
  Pages: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  Products: [
    { label: "1 Ply Tissue", href: "/products#1ply" },
    { label: "Hard Tissue", href: "/products#hard" },
    { label: "Soft Tissue", href: "/products#soft" },
    { label: "Premium Tissue", href: "/products#premium" },
    { label: "Printed Logo Tissue", href: "/products#printed" },
  ],
};

export function Footer() {
  return (
    <footer
      className="relative border-t overflow-hidden"
      style={{
        backgroundColor: "#080808",
        borderColor: "rgba(196,30,58,0.1)",
      }}
    >
      {/* Ambient glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(196,30,58,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 sm:pt-20 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <SSLogoMark size={48} />
              <div>
                <p
                  className="font-playfair text-base tracking-[0.1em]"
                  style={{ color: "#F08080" }}
                >
                  Sri Sahasra
                </p>
                <p
                  className="font-inter text-[10px] tracking-[0.4em] uppercase"
                  style={{ color: "#6B6B6B" }}
                >
                  Enterprises
                </p>
              </div>
            </div>

            <p
              className="font-inter text-sm leading-7 max-w-xs mb-8"
              style={{ color: "#6B6B6B" }}
            >
              Providing premium quality tissue solutions to homes, restaurants,
              hotels, and businesses across Hyderabad with unwavering
              commitment to excellence.
            </p>

            <div className="space-y-2">
              <p
                className="font-inter text-xs tracking-[0.15em] uppercase"
                style={{ color: "#8B0018" }}
              >
                GSTIN
              </p>
              <p className="font-inter text-xs" style={{ color: "#A8A8A8" }}>
                36DJZPG3712C1Z6
              </p>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p
                className="font-inter text-[10px] tracking-[0.3em] uppercase mb-6"
                style={{ color: "#C41E3A" }}
              >
                {section}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-inter text-sm transition-colors duration-300"
                      style={{ color: "#6B6B6B" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#F08080")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#6B6B6B")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div
          className="py-6 sm:py-8 border-t border-b flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-8 lg:gap-12 mb-8"
          style={{ borderColor: "rgba(196,30,58,0.08)" }}
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 lg:gap-12">
            <a
              href="tel:+917995733962"
              className="font-inter text-sm transition-colors duration-300"
              style={{ color: "#A8A8A8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F08080")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A8A8A8")}
            >
              +91 7995733962
            </a>
            <a
              href="mailto:srisahasrahyd@gmail.com"
              className="font-inter text-sm transition-colors duration-300"
              style={{ color: "#A8A8A8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F08080")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A8A8A8")}
            >
              srisahasrahyd@gmail.com
            </a>
            <a
              href="https://maps.app.goo.gl/jCDeqhd6L5jzprGc6?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm transition-colors duration-300"
              style={{ color: "#6B6B6B" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F08080")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6B6B6B")}
            >
              Hyderabad, Telangana
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/ss_enterprises_007?igsh=MWdlOG1pczNldnkydg=="
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: "#C41E3A" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F08080")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C41E3A")}
            >
              Instagram
            </a>
            <a
              href="https://wa.me/917995733962"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: "#C41E3A" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F08080")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C41E3A")}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-inter text-xs" style={{ color: "#3A3A3A" }}>
            © 2025 Sri Sahasra Enterprises. All rights reserved.
          </p>
          <p className="font-inter text-xs" style={{ color: "#3A3A3A" }}>
            Made with passion in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
