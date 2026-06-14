"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const categories = ["All", "1 Ply", "Hard", "Soft", "Premium", "Printed Logo"] as const;
type Category = (typeof categories)[number];

const products = [
  {
    id: "1ply",
    category: "1 Ply" as Category,
    name: "1 Ply Tissue Paper",
    tagline: "Economical Everyday",
    desc: "Our 1 Ply Tissue is lightweight, reliable, and cost-effective. The ideal choice for high-volume commercial use. Perfect for public washrooms, offices, and environments that demand efficiency without sacrificing cleanliness.",
    specs: ["Single-layer construction", "High absorbency", "Hygienic packaging", "Bulk-order friendly", "Economical choice"],
    uses: ["Public washrooms", "Office spaces", "High-volume commercial"],
    image: "/1-ply.webp",
    price: 10,
  },
  {
    id: "hard",
    category: "Hard" as Category,
    name: "Hard Tissue Paper",
    tagline: "Industrial Strength",
    desc: "Engineered for durability and performance, our Hard Tissue stands up to the demands of busy restaurants, hotel kitchens, and commercial environments. Strong, reliable, and consistent, sheet after sheet.",
    specs: ["Reinforced fibre structure", "Tear-resistant", "Moisture-absorbing", "Commercial grade", "Consistent quality"],
    uses: ["Restaurants", "Hotel kitchens", "Catering services"],
    image: "/white-hard-tissue.webp",
    price: 12,
  },
  {
    id: "soft",
    category: "Soft" as Category,
    name: "Soft Tissue Paper",
    tagline: "Gentle Comfort",
    desc: "Crafted from premium fibres for a noticeably soft, skin-friendly feel. Our Soft Tissue is gentle enough for sensitive skin and luxurious enough for upscale hospitality. The perfect everyday upgrade for homes and hotels.",
    specs: ["Ultra-soft fibres", "Skin-friendly", "Gentle on sensitive skin", "Premium softness", "Elegant finish"],
    uses: ["Homes", "Boutique hotels", "Premium dining"],
    image: "/soft-plain-white.jpg",
    price: 16,
  },
  {
    id: "premium",
    category: "Premium" as Category,
    name: "Premium Tissue Paper",
    tagline: "Pure Luxury",
    desc: "The crown jewel of our collection. Our Premium Tissue is feather-soft, impeccably thick, and delivers an experience that speaks to those who settle for nothing less than the finest. Reserved for venues and homes that define luxury.",
    specs: ["Multi-ply construction", "Feather-soft texture", "Extra thick", "Superior absorbency", "Luxury finish"],
    uses: ["5-star hotels", "Fine dining", "Executive suites"],
    image: "/tissue-premium.webp",
    price: 25,
  },
  {
    id: "printed",
    category: "Printed Logo" as Category,
    name: "Printed Logo Tissue",
    tagline: "Your Brand, Elevated",
    desc: "Transform every guest interaction into a branding moment. Our Printed Logo Tissue is fully customised with your business logo, design, or message, beautifully printed on premium tissue. The detail that discerning clients remember.",
    specs: ["Custom logo printing", "Full-colour design", "Premium base tissue", "Minimum MOQ", "Brand-aligned packaging"],
    uses: ["Corporate events", "Fine dining", "Brand marketing"],
    image: "/customized-logo-printed-tissue.png",
    price: 30,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ProductsPage() {
  const [active, setActive] = useState<Category>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "All" ? products : products.filter(p => p.category === active);

  return (
    <>
      {/* Page Hero */}
      <section
        className="relative min-h-[60vh] flex flex-col items-center justify-end pb-12 sm:pb-20 overflow-hidden"
        style={{ backgroundColor: "#080808" }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(196,30,58,0.08) 0%, transparent 70%)" }} />
          <div
            className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden"
          >
            <p
              className="font-playfair font-900 leading-none select-none pointer-events-none"
              style={{ fontSize: "18vw", color: "transparent", WebkitTextStroke: "1px rgba(196,30,58,0.03)", letterSpacing: "0.05em" }}
            >
              PRODUCTS
            </p>
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            className="font-inter text-[10px] tracking-[0.5em] uppercase mb-6"
            style={{ color: "#C41E3A" }}
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Our Collection
          </motion.p>
          <motion.h1
            className="font-playfair font-800 leading-none tracking-tight mb-6"
            style={{
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              background: "linear-gradient(180deg, #F5F0E8 0%, #888888 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Products
          </motion.h1>
          <motion.p
            className="font-inter text-sm leading-7 max-w-md mx-auto"
            style={{ color: "#6B6B6B" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
          >
            Five product lines engineered for different needs, from daily utility
            to custom-branded luxury.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section ref={ref} className="py-12 lg:py-24 px-6 relative" style={{ backgroundColor: "#080808" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.15), transparent)" }} />

        <div className="max-w-7xl mx-auto">
          {/* Category filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-6 py-2.5 font-inter text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-300"
                style={{
                  color: active === cat ? "#080808" : "#6B6B6B",
                  backgroundColor: active === cat ? "#C41E3A" : "transparent",
                  border: `1px solid ${active === cat ? "#C41E3A" : "rgba(196,30,58,0.2)"}`,
                }}
                onMouseEnter={e => {
                  if (active !== cat) {
                    (e.currentTarget as HTMLElement).style.color = "#C41E3A";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,30,58,0.4)";
                  }
                }}
                onMouseLeave={e => {
                  if (active !== cat) {
                    (e.currentTarget as HTMLElement).style.color = "#6B6B6B";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,30,58,0.2)";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Product cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  id={product.id}
                  className="glass-card overflow-hidden group transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  whileHover={{ y: -4, boxShadow: "0 0 50px rgba(196,30,58,0.1)" }}
                >
                  {/* Product image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(8,8,8,0.92) 100%)" }}
                    />
                  </div>

                  <div className="p-5 sm:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="flex-1">
                      <p className="font-inter text-[9px] tracking-[0.35em] uppercase mb-2" style={{ color: "#C41E3A" }}>
                        {product.tagline}
                      </p>
                      <div className="flex items-baseline justify-between mb-4 gap-4 flex-wrap">
                        <h3 className="font-playfair font-700 leading-tight" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#F5F0E8" }}>
                          {product.name}
                        </h3>
                        <div className="flex items-baseline gap-1.5 shrink-0">
                          <span className="font-playfair font-700" style={{ fontSize: "1.75rem", color: "#C41E3A" }}>
                            ₹{product.price}
                          </span>
                          <span className="font-inter text-[10px] tracking-[0.15em] uppercase" style={{ color: "#6B6B6B" }}>
                            / pack
                          </span>
                        </div>
                      </div>
                      <p className="font-inter text-sm leading-7 mb-6" style={{ color: "#6B6B6B" }}>
                        {product.desc}
                      </p>

                      {/* Specs */}
                      <div className="mb-6">
                        <p className="font-inter text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: "#8B0018" }}>
                          Features
                        </p>
                        <ul className="space-y-2">
                          {product.specs.map(spec => (
                            <li key={spec} className="flex items-center gap-3">
                              <Check size={12} style={{ color: "#C41E3A", flexShrink: 0 }} />
                              <span className="font-inter text-xs" style={{ color: "#888888" }}>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Use cases */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {product.uses.map(use => (
                          <span
                            key={use}
                            className="font-inter text-[9px] tracking-[0.1em] px-3 py-1.5"
                            style={{
                              color: "#C41E3A",
                              border: "1px solid rgba(196,30,58,0.2)",
                              backgroundColor: "rgba(196,30,58,0.04)",
                            }}
                          >
                            {use}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="group/btn flex items-center gap-3 font-inter text-[11px] tracking-[0.25em] uppercase font-medium px-7 py-3.5 transition-all duration-400 w-fit"
                        style={{ backgroundColor: "#C41E3A", color: "#080808" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F08080"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#C41E3A"; }}
                      >
                        Get Quote
                        <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  <div className="mt-8 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: "linear-gradient(to right, #C41E3A, transparent)" }} />
                  </div>{/* end p-8 lg:p-10 */}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bulk order CTA */}
      <section className="py-12 lg:py-24 px-6 relative" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.12), transparent)" }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(196,30,58,0.04) 0%, transparent 70%)" }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-inter text-[10px] tracking-[0.45em] uppercase mb-5" style={{ color: "#C41E3A" }}>
              Bulk Orders
            </p>
            <h2 className="font-playfair font-700 leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F0E8" }}>
              Need Large Quantities?
              <br />
              <em style={{ color: "#C41E3A" }}>We&apos;ve Got You.</em>
            </h2>
            <p className="font-inter text-sm leading-7 max-w-md mx-auto mb-6 lg:mb-10" style={{ color: "#6B6B6B" }}>
              We offer competitive bulk pricing for restaurants, hotels, event
              organisers, and businesses. Contact us to discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 font-inter text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-400"
              style={{ backgroundColor: "#C41E3A", color: "#080808" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F08080"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#C41E3A"; }}
            >
              Request Bulk Quote
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
