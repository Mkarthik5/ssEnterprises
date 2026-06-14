"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SSLogoMark } from "@/components/SSLogo";

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
  show: { transition: { staggerChildren: 0.13 } },
};

const milestones = [
  { year: "2024", event: "I registered Sri Sahasra Enterprises in Hyderabad. No office, no team. Just me, a laptop, and a phone full of supplier contacts I cold-called." },
  { year: "2024", event: "First products live: 1 Ply and Hard Tissue. My first client said yes after I showed up to his restaurant three times. Persistence works." },
  { year: "2024", event: "Expanded to Soft and Premium lines because customers kept asking. I listened. That is still how we grow, by paying attention." },
  { year: "2025", event: "Launched Printed Logo Tissue. A restaurant owner asked if we could print his logo on them. That one question opened a whole new product line." },
  { year: "2025", event: "Still growing. Still showing up every day. Still obsessed with quality. That hasn't changed and it never will." },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderLetter />
      <WhyQualityMatters />
      <ValuesFromFounder />
      <MilestonesSection />
      <ClosingSection />
    </>
  );
}

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
function AboutHero() {
  return (
    <section
      className="relative min-h-[72vh] flex flex-col items-center justify-end pb-12 sm:pb-20 overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(196,30,58,0.08) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <p
            className="font-playfair font-900 leading-none select-none pointer-events-none"
            style={{ fontSize: "22vw", color: "transparent", WebkitTextStroke: "1px rgba(196,30,58,0.03)", letterSpacing: "0.04em" }}
          >
            MY STORY
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mb-10"
        >
          <SSLogoMark size={64} />
        </motion.div>

        <motion.p
          className="font-inter text-[10px] tracking-[0.5em] uppercase mb-6"
          style={{ color: "#C41E3A" }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          In My Own Words
        </motion.p>

        <motion.h1
          className="font-playfair font-800 leading-tight tracking-tight mb-6"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            background: "linear-gradient(180deg, #F5F0E8 0%, #888888 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          Why I Built This.
        </motion.h1>

        <motion.p
          className="font-inter text-sm leading-8 max-w-sm"
          style={{ color: "#6B6B6B" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          Not a corporate write-up. Not a PR pitch.
          <br />
          Just the founder, talking directly to you.
        </motion.p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   FOUNDER LETTER
══════════════════════════════════════ */
function FounderLetter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-32 px-6 relative" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.15), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left: decorative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div
              className="font-playfair font-900 leading-none select-none"
              style={{ fontSize: "clamp(8rem, 20vw, 16rem)", color: "transparent", WebkitTextStroke: "1px rgba(196,30,58,0.06)" }}
            >
              SS
            </div>

            {/* Pull quote */}
            <div
              className="absolute top-1/2 -translate-y-1/2 left-4 right-4 p-5 sm:left-8 sm:right-8 sm:p-8 glass-card"
              style={{ borderLeft: "2px solid rgba(196,30,58,0.5)" }}
            >
              <p className="font-playfair italic text-base sm:text-xl leading-8" style={{ color: "#F08080" }}>
                &ldquo;People told me tissue paper was a boring business.
                <br />
                They were right. That&apos;s exactly why I chose it.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-px" style={{ backgroundColor: "#C41E3A" }} />
                <p className="font-inter text-[10px] tracking-[0.25em] uppercase" style={{ color: "#C41E3A" }}>
                  Founder, Sri Sahasra
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: letter */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.45em] uppercase mb-5" style={{ color: "#C41E3A" }}>
              The Founder&apos;s Letter
            </motion.p>

            <motion.h2 variants={fadeUp} className="font-playfair font-700 leading-tight mb-6 lg:mb-10" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F5F0E8" }}>
              I&apos;m a student who
              <br />
              <em style={{ color: "#C41E3A" }}>refused to wait.</em>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-6">
              <p className="font-inter text-sm leading-8" style={{ color: "#A8A8A8" }}>
                I was still in college when I started this. Most people around me were studying for exams or waiting to graduate before doing anything real. I could not wait. There was this hunger in me, this feeling that the world does not pause for your resume, so why should you?
              </p>
              <p className="font-inter text-sm leading-8" style={{ color: "#888888" }}>
                I looked for a business that was underestimated. Something people needed every single day but nobody was doing well. Tissue paper. Restaurants using rough, scratchy product. Homes buying whatever was cheapest at the store. Nobody was bringing quality and care to this space.
              </p>
              <p className="font-inter text-sm leading-8" style={{ color: "#888888" }}>
                So I did. I sourced better materials, I learned the difference between a tissue that performs and one that falls apart, and I showed up to client after client, personally, to prove that a young guy with a dream could actually deliver.
              </p>
              <p className="font-inter text-sm leading-8" style={{ color: "#6B6B6B" }}>
                I put my name behind every roll we ship. That&apos;s not a marketing line. It&apos;s the only standard I know how to hold myself to.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6">
              <Link
                href="/products"
                className="group flex items-center gap-3 px-8 py-4 font-inter text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-400"
                style={{ backgroundColor: "#C41E3A", color: "#F5F0E8" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#8B0018"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#C41E3A"; }}
              >
                See What I Built <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   WHY QUALITY MATTERS (founder voice)
══════════════════════════════════════ */
function WhyQualityMatters() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const points = [
    {
      heading: "I felt it on my own skin.",
      body: "Before I sold a single roll, I spent weeks testing every type of tissue I could find. The cheap ones? They're rough. They irritate. They fall apart. You notice. Your customers notice. I decided I'd only sell what I'd put in my own bathroom.",
    },
    {
      heading: "Quality is the only moat I have.",
      body: "I don't have decades of history or a massive factory. What I have is the commitment to source better and care more than the next guy. When a client reorders, it's because the product earned it, not because I locked them into a contract.",
    },
    {
      heading: "The smallest details make the biggest impression.",
      body: "A restaurant's tissue paper is the last thing a guest touches before they leave. That moment matters. I want your guests to think, even for a second, 'this place cares.' Because you do. And so do we.",
    },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-32 px-6 relative overflow-hidden" style={{ backgroundColor: "#080808" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.15), transparent)" }} />

      {/* Ghost text bg */}
      <div
        className="absolute -right-[5vw] top-1/2 -translate-y-1/2 font-playfair font-900 select-none pointer-events-none leading-none"
        style={{ fontSize: "35vw", color: "transparent", WebkitTextStroke: "1px rgba(196,30,58,0.025)" }}
        aria-hidden
      >
        Q
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="mb-10 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-inter text-[10px] tracking-[0.45em] uppercase mb-5" style={{ color: "#C41E3A" }}>
            On Quality
          </p>
          <h2 className="font-playfair font-700 leading-tight max-w-xl" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "#F5F0E8" }}>
            Why I&apos;m obsessed
            <br />
            <em style={{ color: "#C41E3A" }}>with getting it right.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 group transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ y: -4, boxShadow: "0 0 40px rgba(196,30,58,0.1)" }}
            >
              <p
                className="font-playfair text-4xl font-700 leading-none mb-6"
                style={{ WebkitTextStroke: "1px rgba(196,30,58,0.2)", color: "transparent" }}
              >
                0{i + 1}
              </p>
              <h3 className="font-playfair text-xl font-600 italic mb-4" style={{ color: "#F5F0E8" }}>
                {p.heading}
              </h3>
              <p className="font-inter text-sm leading-7" style={{ color: "#6B6B6B" }}>
                {p.body}
              </p>
              <div className="mt-8 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: "linear-gradient(to right, #C41E3A, transparent)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   VALUES - founder voice
══════════════════════════════════════ */
function ValuesFromFounder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const values = [
    {
      title: "Purity",
      founder: "I want what goes in your hands to be clean. Simple as that. No harmful fillers, no cheap substitutes. If I wouldn't give it to my family, I won't give it to yours.",
    },
    {
      title: "Excellence",
      founder: "I hate the word 'good enough.' It's a trap. Once you settle for good enough, you're done. I wake up asking how to make the product better, the service faster, the experience cleaner.",
    },
    {
      title: "Integrity",
      founder: "What you see is what you get. I'll never quote you a price for premium and ship you something less. My word is the only contract that really matters to me.",
    },
    {
      title: "Passion",
      founder: "I chose this. Nobody handed it to me. Every early morning, every cold call, every delivery I tracked personally. That's passion. It lives in the product. You'll feel it.",
    },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-32 px-6 relative" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.12), transparent)" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(196,30,58,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-inter text-[10px] tracking-[0.45em] uppercase mb-5" style={{ color: "#C41E3A" }}>
            What I Stand For
          </p>
          <h2 className="font-playfair font-700 leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "#F5F0E8" }}>
            The values I actually
            <br />
            <em style={{ color: "#C41E3A" }}>live by.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="glass-card p-10 group transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ y: -4, boxShadow: "0 0 50px rgba(196,30,58,0.08)" }}
            >
              <div className="flex items-start gap-5">
                <p
                  className="font-playfair text-4xl font-700 leading-none mt-1 flex-shrink-0"
                  style={{ WebkitTextStroke: "1px rgba(196,30,58,0.3)", color: "transparent" }}
                >
                  0{i + 1}
                </p>
                <div>
                  <h3 className="font-playfair text-2xl font-600 mb-4" style={{ color: "#F5F0E8" }}>
                    {v.title}
                  </h3>
                  <p className="font-inter text-sm leading-7" style={{ color: "#6B6B6B" }}>
                    {v.founder}
                  </p>
                </div>
              </div>
              <div className="mt-8 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: "linear-gradient(to right, #C41E3A, transparent)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   MILESTONES
══════════════════════════════════════ */
function MilestonesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-32 px-6 relative" style={{ backgroundColor: "#080808" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.12), transparent)" }} />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-10 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-inter text-[10px] tracking-[0.45em] uppercase mb-5" style={{ color: "#C41E3A" }}>
            The Journey So Far
          </p>
          <h2 className="font-playfair font-700 leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", color: "#F5F0E8" }}>
            How We Got Here
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #C41E3A, rgba(196,30,58,0.05))" }}
            initial={{ scaleY: 0, originY: "top" }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          />

          <div className="space-y-10 lg:space-y-14 pl-14 sm:pl-20">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.7 }}
              >
                <div
                  className="absolute -left-[52px] top-1.5 w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#C41E3A", boxShadow: "0 0 14px rgba(196,30,58,0.6)" }}
                />
                <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-2" style={{ color: "#C41E3A" }}>
                  {m.year}
                </p>
                <p className="font-inter text-sm leading-7" style={{ color: "#A8A8A8" }}>
                  {m.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   CLOSING - founder to reader
══════════════════════════════════════ */
function ClosingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-32 px-6 relative overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.15), transparent)" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,30,58,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.45em] uppercase mb-8" style={{ color: "#C41E3A" }}>
            To You, the Reader
          </motion.p>

          {/* The letter */}
          <motion.div
            variants={fadeUp}
            className="glass-card p-6 sm:p-10 lg:p-14 mb-8 lg:mb-12"
            style={{ borderLeft: "2px solid rgba(196,30,58,0.4)" }}
          >
            <p className="font-playfair italic text-lg leading-9 mb-6" style={{ color: "#F08080" }}>
              &ldquo;You&apos;re reading this because you&apos;re thinking about trusting us
              with your business or your home. I don&apos;t take that lightly.
            </p>
            <div className="space-y-5">
              <p className="font-inter text-sm leading-8" style={{ color: "#A8A8A8" }}>
                Maybe you&apos;re a restaurant owner who&apos;s skeptical about switching suppliers. Maybe you&apos;re comparing us to someone who&apos;s been in the game for 20 years. Maybe you&apos;re wondering if a student-built company can really deliver at the level you need.
              </p>
              <p className="font-inter text-sm leading-8" style={{ color: "#888888" }}>
                Here&apos;s what I&apos;ll tell you honestly: I can&apos;t offer you decades of experience. What I can offer you is someone who cares more about your satisfaction than about protecting a legacy. Someone who will answer your call. Someone who will fix a problem before you finish explaining it.
              </p>
              <p className="font-inter text-sm leading-8" style={{ color: "#888888" }}>
                I built this because I believed the market deserved better. I still believe that every day. And I believe I can prove it to you, one order at a time.
              </p>
              <p className="font-playfair italic text-base leading-7" style={{ color: "#F08080" }}>
                Give us a chance. I promise I won&apos;t waste it.&rdquo;
              </p>
            </div>

            <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(196,30,58,0.1)" }}>
              <p className="font-playfair text-base" style={{ color: "#F5F0E8" }}>Founder</p>
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase mt-1" style={{ color: "#C41E3A" }}>
                Sri Sahasra Enterprises · Hyderabad
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 px-10 py-4 font-inter text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-400"
              style={{ backgroundColor: "#C41E3A", color: "#F5F0E8" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#8B0018"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#C41E3A"; }}
            >
              Take That First Step
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center gap-3 px-10 py-4 font-inter text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-400"
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
              Explore Products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
