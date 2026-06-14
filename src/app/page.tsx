"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { SSLogo } from "@/components/SSLogo";
import { InstagramIcon } from "@/components/InstagramIcon";

/* ─── Shared animation variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ─── Product data ─── */
const products = [
  {
    id: "1ply",
    name: "1 Ply Tissue",
    tagline: "Economical Everyday",
    desc: "Lightweight and cost-effective tissue for everyday use. Ideal for high-volume commercial environments.",
    image: "/1-ply.webp",
    price: 10,
  },
  {
    id: "hard",
    name: "Hard Tissue",
    tagline: "Industrial Strength",
    desc: "Durable, heavy-duty tissue engineered for restaurants, hotels, and commercial spaces demanding longevity.",
    image: "/white-hard-tissue.webp",
    price: 12,
  },
  {
    id: "soft",
    name: "Soft Tissue",
    tagline: "Gentle Comfort",
    desc: "Ultra-soft, skin-friendly tissue crafted from premium fibres. Perfect for homes and premium hospitality.",
    image: "/soft-plain-white.jpg",
    price: 16,
  },
  {
    id: "premium",
    name: "Premium Tissue",
    tagline: "Pure Luxury",
    desc: "The finest tissue in our collection. Feather-soft, thick, and opulently smooth for discerning clients.",
    image: "/tissue-premium.webp",
    price: 25,
  },
  {
    id: "printed",
    name: "Printed Logo Tissue",
    tagline: "Your Brand, Elevated",
    desc: "Custom-printed tissues with your business logo or design. Turn every table into a branding moment.",
    image: "/customized-logo-printed-tissue.png",
    price: 30,
  },
];

const pillars = [
  { num: "01", title: "Premium Quality", desc: "Finest raw materials and advanced manufacturing for tissue that meets the highest standards." },
  { num: "02", title: "Fast Delivery", desc: "Prompt, reliable delivery across Hyderabad so your business never runs short." },
  { num: "03", title: "Competitive Pricing", desc: "Premium quality at transparent, market-fair prices. Value you can feel in every sheet." },
  { num: "04", title: "Dedicated Support", desc: "A passionate team always ready to assist, advise, and ensure your complete satisfaction." },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <WhySection />
      <ContactCTA />
    </>
  );
}

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Background ambiance */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="animate-glow-breathe absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] h-[60vh]"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(196,30,58,0.1) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -left-40 top-1/3 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,30,58,0.03) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute -right-40 top-1/4 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,30,58,0.03) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        {/* Rotating rings */}
        <motion.div
          className="animate-rotate-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ border: "1px solid rgba(196,30,58,0.04)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[880px] h-[880px] rounded-full"
          style={{ border: "1px solid rgba(196,30,58,0.02)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 2 }}
        />
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 3 : 2,
              height: i % 3 === 0 ? 3 : 2,
              backgroundColor: "#C41E3A",
              left: `${10 + i * 11}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.45, 0.15] }}
            transition={{ duration: 4 + i * 0.8, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* EST label */}
        <motion.p
          className="font-inter text-[10px] tracking-[0.5em] uppercase mb-6"
          style={{ color: "#C41E3A" }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Est. 2024 &nbsp;·&nbsp; Hyderabad, India
        </motion.p>

        {/* SS Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
          className="mb-6"
        >
          <SSLogo size={80} />
        </motion.div>

        {/* Vertical line */}
        <motion.div
          className="w-px h-14 mb-8"
          style={{ background: "linear-gradient(to bottom, rgba(196,30,58,0.8), transparent)" }}
          initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.2 }}
        />

        {/* Main heading */}
        <motion.h1
          className="font-playfair font-800 leading-none tracking-tight mb-4"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            background: "linear-gradient(180deg, #F5F0E8 0%, #888888 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1, ease: "easeOut" }}
        >
          Sri Sahasra
        </motion.h1>

        <motion.p
          className="font-playfair italic font-400 mb-10"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)", color: "#C41E3A" }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
        >
          Enterprises
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center gap-4 mb-8 w-full max-w-xs"
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(196,30,58,0.5))" }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: "#C41E3A" }} />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(196,30,58,0.5))" }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-inter font-300 tracking-[0.3em] uppercase mb-8 lg:mb-14"
          style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.85rem)", color: "#888888" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Where Purity Meets Excellence
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <Link
            href="/products"
            className="group flex items-center gap-3 px-8 py-4 font-inter text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-400 min-w-[180px] justify-center"
            style={{ backgroundColor: "#C41E3A", color: "#080808" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F08080"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#C41E3A"; }}
          >
            Explore Products
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-3 px-8 py-4 font-inter text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-400 min-w-[180px] justify-center"
            style={{ color: "#C41E3A", border: "1px solid rgba(196,30,58,0.3)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,30,58,0.6)";
              (e.currentTarget as HTMLElement).style.color = "#F08080";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,30,58,0.3)";
              (e.currentTarget as HTMLElement).style.color = "#C41E3A";
            }}
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <p className="font-inter text-[9px] tracking-[0.45em] uppercase" style={{ color: "#2E2E2E" }}>
          Scroll
        </p>
        <motion.div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, #C41E3A, transparent)" }}
          animate={{ scaleY: [0, 1, 0], originY: "top" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════
   PRODUCTS SECTION
══════════════════════════════════════ */
function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-32 px-6 relative" style={{ backgroundColor: "#080808" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.2), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-10 lg:mb-20 flex flex-col items-center text-center"
          variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}
        >
          <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.45em] uppercase mb-5" style={{ color: "#C41E3A" }}>
            Our Collection
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-playfair font-700 mb-6 leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "#F5F0E8" }}>
            Crafted for Every Need
          </motion.h2>
          <motion.p variants={fadeUp} className="font-inter text-sm leading-7 max-w-md" style={{ color: "#6B6B6B" }}>
            Five distinct tissue lines, each perfected for specific environments and requirements, from economical to ultra-premium.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}
        >
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              className={`group glass-card overflow-hidden transition-all duration-500 cursor-pointer ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              whileHover={{ y: -6, boxShadow: "0 0 40px rgba(196,30,58,0.12), 0 0 80px rgba(196,30,58,0.04)" }}
            >
              {/* Product image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(8,8,8,0.88) 100%)" }}
                />
              </div>

              {/* Text content */}
              <div className="p-5 sm:p-8">
                <p className="font-inter text-[9px] tracking-[0.35em] uppercase mb-2" style={{ color: "#C41E3A" }}>
                  {product.tagline}
                </p>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-playfair text-2xl font-600" style={{ color: "#F5F0E8" }}>
                    {product.name}
                  </h3>
                  <span className="font-playfair text-xl font-700 shrink-0 ml-3" style={{ color: "#C41E3A" }}>
                    ₹{product.price}
                    <span className="font-inter text-[10px] font-400 tracking-[0.1em] ml-1" style={{ color: "#6B6B6B" }}>/pack</span>
                  </span>
                </div>
                <p className="font-inter text-sm leading-6" style={{ color: "#6B6B6B" }}>
                  {product.desc}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span
                    className="font-inter text-[10px] tracking-[0.2em] uppercase transition-all duration-300 group-hover:tracking-[0.35em]"
                    style={{ color: "#C41E3A" }}
                  >
                    Learn More
                  </span>
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-2" style={{ color: "#C41E3A" }} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link
            href="/products"
            className="group flex items-center gap-3 font-inter text-[11px] tracking-[0.25em] uppercase font-medium px-8 py-4 transition-all duration-400"
            style={{ color: "#C41E3A", border: "1px solid rgba(196,30,58,0.25)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(196,30,58,0.04)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,30,58,0.5)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,30,58,0.25)";
            }}
          >
            View All Products
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   ABOUT SECTION
══════════════════════════════════════ */
function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "2024", label: "Founded" },
    { value: "5+", label: "Product Lines" },
    { value: "100+", label: "Happy Clients" },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-32 px-6 relative overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Ghost S in background */}
      <div
        className="absolute -right-[5vw] top-1/2 -translate-y-1/2 font-playfair font-900 select-none pointer-events-none leading-none"
        style={{ fontSize: "40vw", color: "transparent", WebkitTextStroke: "1px rgba(196,30,58,0.025)" }}
        aria-hidden
      >
        S
      </div>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.12), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
            <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.45em] uppercase mb-5" style={{ color: "#C41E3A" }}>
              Our Story
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-playfair font-700 leading-tight mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#F5F0E8" }}>
              A Vision Born
              <br />
              <em style={{ color: "#C41E3A" }}>From Passion</em>
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5">
              <p className="font-inter text-sm leading-8" style={{ color: "#A8A8A8" }}>
                Sri Sahasra Enterprises was born from a student&apos;s dream. A young entrepreneur passionate about building something real, something that serves people every single day. With blood, sweat, and relentless dedication, the founder turned an idea into a trusted tissue brand serving Hyderabad.
              </p>
              <p className="font-inter text-sm leading-8" style={{ color: "#6B6B6B" }}>
                What began as a bold bet on quality has grown into a range of five premium tissue lines serving homes, hotels, restaurants, and businesses. Every roll we deliver carries the same promise: purity, softness, and excellence.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10">
              <Link
                href="/about"
                className="group flex items-center gap-3 font-inter text-[11px] tracking-[0.25em] uppercase font-medium"
                style={{ color: "#C41E3A" }}
              >
                Read the Full Story
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex justify-center mb-6 lg:mb-12">
              <SSLogo size={100} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center p-5 glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.7 }}
                >
                  <p className="font-playfair text-2xl font-700 mb-1.5" style={{ color: "#C41E3A" }}>{s.value}</p>
                  <p className="font-inter text-[9px] tracking-[0.2em] uppercase" style={{ color: "#6B6B6B" }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-5 p-6 glass-card"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <p className="font-playfair italic text-base leading-7" style={{ color: "#888888" }}>
                &ldquo;We don&apos;t just sell tissue. We deliver a promise of purity to every home and business that trusts us.&rdquo;
              </p>
              <p className="font-inter text-[10px] tracking-[0.2em] uppercase mt-4" style={{ color: "#C41E3A" }}>
                Founder, Sri Sahasra
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   WHY CHOOSE US
══════════════════════════════════════ */
function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-32 px-6 relative" style={{ backgroundColor: "#080808" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.15), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10 lg:mb-20"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-inter text-[10px] tracking-[0.45em] uppercase mb-5" style={{ color: "#C41E3A" }}>
            Why Us
          </p>
          <h2 className="font-playfair font-700 leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "#F5F0E8" }}>
            The Sri Sahasra
            <br />
            <em style={{ color: "#C41E3A" }}>Difference</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              className="glass-card p-6 sm:p-8 group transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.8 }}
              whileHover={{ y: -6, boxShadow: "0 0 40px rgba(196,30,58,0.1)" }}
            >
              <p
                className="font-playfair text-5xl font-700 mb-6 leading-none"
                style={{ WebkitTextStroke: "1px rgba(196,30,58,0.2)", color: "transparent" }}
              >
                {p.num}
              </p>
              <h3 className="font-playfair text-xl font-600 mb-3" style={{ color: "#F5F0E8" }}>{p.title}</h3>
              <p className="font-inter text-sm leading-6" style={{ color: "#6B6B6B" }}>{p.desc}</p>
              <div className="mt-6 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: "linear-gradient(to right, #C41E3A, transparent)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   CONTACT CTA
══════════════════════════════════════ */
function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-32 px-6 relative overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.15), transparent)" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,30,58,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}
        >
          <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.45em] uppercase mb-6" style={{ color: "#C41E3A" }}>
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-playfair font-700 leading-tight mb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F5F0E8" }}>
            Ready to Order?
          </motion.h2>
          <motion.p variants={fadeUp} className="font-inter text-sm leading-7 max-w-md mx-auto mb-8 lg:mb-14" style={{ color: "#6B6B6B" }}>
            Contact us for bulk orders, custom-printed tissues, or any queries. Our team responds within hours.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 mb-8 lg:mb-16">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 px-10 py-4 font-inter text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-400"
              style={{ backgroundColor: "#C41E3A", color: "#080808" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F08080"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#C41E3A"; }}
            >
              Send Message <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/917995733962"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-10 py-4 font-inter text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-400"
              style={{ color: "#C41E3A", border: "1px solid rgba(196,30,58,0.3)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(196,30,58,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,30,58,0.5)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,30,58,0.3)";
              }}
            >
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 pt-10"
            style={{ borderTop: "1px solid rgba(196,30,58,0.08)" }}
          >
            {[
              { href: "tel:+917995733962", Icon: Phone, label: "+91 7995733962" },
              { href: "mailto:srisahasrahyd@gmail.com", Icon: Mail, label: "srisahasrahyd@gmail.com" },
              { href: "https://www.instagram.com/ss_enterprises_007?igsh=MWdlOG1pczNldnkydg==", Icon: InstagramIcon, label: "@ss_enterprises_007", external: true },
            ].map(({ href, Icon, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center justify-center gap-2.5 font-inter text-sm transition-colors duration-300"
                style={{ color: "#6B6B6B" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F08080")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6B6B6B")}
              >
                <Icon size={14} style={{ color: "#C41E3A" }} />
                {label}
              </a>
            ))}
            <a
              href="https://maps.app.goo.gl/jCDeqhd6L5jzprGc6?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 font-inter text-sm transition-colors duration-300"
              style={{ color: "#6B6B6B" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F08080")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6B6B6B")}
            >
              <MapPin size={14} style={{ color: "#C41E3A" }} />
              Hyderabad, Telangana
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

