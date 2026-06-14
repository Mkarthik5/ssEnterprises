"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, MessageSquare } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const contactInfo = [
  { Icon: Phone, label: "Phone", value: "+91 7995733962", href: "tel:+917995733962" },
  { Icon: Mail, label: "Email", value: "srisahasrahyd@gmail.com", href: "mailto:srisahasrahyd@gmail.com" },
  { Icon: MapPin, label: "Location", value: "Road No. 2, 1st Phase Allwyn Colony, Jagathgiri Gutta, Hyderabad 500072", href: "https://maps.app.goo.gl/jCDeqhd6L5jzprGc6?g_st=iw" },
  { Icon: InstagramIcon, label: "Instagram", value: "@ss_enterprises_007", href: "https://www.instagram.com/ss_enterprises_007?igsh=MWdlOG1pczNldnkydg==" },
];

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBody />
      <MapSection />
    </>
  );
}

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
function ContactHero() {
  return (
    <section
      className="relative min-h-[60vh] flex flex-col items-center justify-end pb-12 sm:pb-20 overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(196,30,58,0.08) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <p
            className="font-playfair font-900 leading-none select-none pointer-events-none"
            style={{ fontSize: "16vw", color: "transparent", WebkitTextStroke: "1px rgba(196,30,58,0.03)", letterSpacing: "0.05em" }}
          >
            CONTACT
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
          Get In Touch
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
          Contact Us
        </motion.h1>
        <motion.p
          className="font-inter text-sm leading-7 max-w-md mx-auto"
          style={{ color: "#6B6B6B" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          Whether it&apos;s a bulk order, a custom tissue design, or just a question, we respond fast and we&apos;d love to hear from you.
        </motion.p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   CONTACT BODY
══════════════════════════════════════ */
function ContactBody() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Simulate form send - wire up to Formspree/EmailJS in production
    setTimeout(() => setStatus("sent"), 1500);
  }

  return (
    <section ref={ref} className="py-12 lg:py-24 px-6 relative" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.15), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left: Contact info */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
            <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.45em] uppercase mb-5" style={{ color: "#C41E3A" }}>
              Reach Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-playfair font-700 leading-tight mb-6 lg:mb-10" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F5F0E8" }}>
              We&apos;re Always
              <br />
              <em style={{ color: "#C41E3A" }}>Available</em>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-6 mb-8 lg:mb-12">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-5 group transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-gold/10"
                    style={{ border: "1px solid rgba(196,30,58,0.2)" }}
                  >
                    <Icon size={16} style={{ color: "#C41E3A" }} />
                  </div>
                  <div>
                    <p className="font-inter text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: "#8B0018" }}>
                      {label}
                    </p>
                    <p
                      className="font-inter text-sm transition-colors duration-300"
                      style={{ color: "#A8A8A8" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#F08080")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#A8A8A8")}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div variants={fadeUp}>
              <a
                href="https://wa.me/917995733962"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 font-inter text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-400 w-fit mb-6"
                style={{ backgroundColor: "#C41E3A", color: "#080808" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#F08080"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#C41E3A"; }}
              >
                <MessageSquare size={14} />
                Chat on WhatsApp
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* GSTIN */}
              <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(196,30,58,0.08)" }}>
                <p className="font-inter text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "#8B0018" }}>
                  GSTIN
                </p>
                <p className="font-inter text-sm font-medium" style={{ color: "#888888" }}>
                  36DJZPG3712C1Z6
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {status === "sent" ? (
              <motion.div
                className="glass-card p-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mx-auto mb-6"
                  style={{ border: "1px solid rgba(196,30,58,0.4)", backgroundColor: "rgba(196,30,58,0.06)" }}
                >
                  <ArrowRight size={20} style={{ color: "#C41E3A" }} />
                </div>
                <h3 className="font-playfair text-2xl font-600 mb-3" style={{ color: "#F5F0E8" }}>
                  Message Sent!
                </h3>
                <p className="font-inter text-sm leading-6" style={{ color: "#6B6B6B" }}>
                  Thank you for reaching out. We&apos;ll get back to you within a few hours.
                </p>
                <button
                  className="mt-8 font-inter text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: "#C41E3A" }}
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", message: "" }); }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-10 space-y-6">
                <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-8" style={{ color: "#C41E3A" }}>
                  Send a Message
                </p>

                {[
                  { name: "name", label: "Full Name", type: "text", required: true },
                  { name: "email", label: "Email Address", type: "email", required: true },
                  { name: "phone", label: "Phone Number (optional)", type: "tel", required: false },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block font-inter text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "#6B6B6B" }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full bg-transparent font-inter text-sm py-3 px-0 outline-none transition-all duration-300 focus:outline-none"
                      style={{
                        color: "#F5F0E8",
                        borderBottom: "1px solid rgba(196,30,58,0.2)",
                        caretColor: "#C41E3A",
                      }}
                      onFocus={e => { e.currentTarget.style.borderBottomColor = "rgba(196,30,58,0.6)"; }}
                      onBlur={e => { e.currentTarget.style.borderBottomColor = "rgba(196,30,58,0.2)"; }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-inter text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "#6B6B6B" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent font-inter text-sm py-3 px-0 outline-none resize-none transition-all duration-300"
                    style={{
                      color: "#F5F0E8",
                      borderBottom: "1px solid rgba(196,30,58,0.2)",
                      caretColor: "#C41E3A",
                    }}
                    onFocus={e => { e.currentTarget.style.borderBottomColor = "rgba(196,30,58,0.6)"; }}
                    onBlur={e => { e.currentTarget.style.borderBottomColor = "rgba(196,30,58,0.2)"; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex items-center gap-3 px-8 py-4 font-inter text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-400 w-full justify-center mt-4"
                  style={{
                    backgroundColor: status === "sending" ? "rgba(196,30,58,0.5)" : "#C41E3A",
                    color: "#080808",
                  }}
                  onMouseEnter={e => {
                    if (status !== "sending") (e.currentTarget as HTMLElement).style.backgroundColor = "#F08080";
                  }}
                  onMouseLeave={e => {
                    if (status !== "sending") (e.currentTarget as HTMLElement).style.backgroundColor = "#C41E3A";
                  }}
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   MAP
══════════════════════════════════════ */
function MapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-12 lg:py-24 px-6 relative" style={{ backgroundColor: "#080808" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.12), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-inter text-[10px] tracking-[0.45em] uppercase mb-4" style={{ color: "#C41E3A" }}>
            Find Us
          </p>
          <h2 className="font-playfair font-700" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F5F0E8" }}>
            Our Location
          </h2>
        </motion.div>

        <motion.div
          className="overflow-hidden h-64 sm:h-80 lg:h-[480px]"
          style={{ border: "1px solid rgba(196,30,58,0.12)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Road+No.+2,+1st+Phase+Allwyn+Colony,+Jagathgiri+Gutta,+Hyderabad,+Telangana+500072,+India&output=embed&z=16"
            width="100%"
            height="100%"
            style={{
              border: "none",
              display: "block",
              filter: "invert(0.9) hue-rotate(180deg) saturate(0.4) brightness(0.6)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Sahasra Enterprises Location"
          />
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <p className="font-inter text-sm" style={{ color: "#6B6B6B" }}>
            Road No. 2, 1st Phase Allwyn Colony, Jagathgiri Gutta, Hyderabad, Telangana 500072
          </p>
          <a
            href="https://maps.app.goo.gl/jCDeqhd6L5jzprGc6?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-inter text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
            style={{ color: "#C41E3A" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#F08080")}
            onMouseLeave={e => (e.currentTarget.style.color = "#C41E3A")}
          >
            Open in Maps
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
