"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function About() {
  return (
    <div style={{ padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
      <div className="sec-label">About</div>
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem" }}>
        {/* Left */}
        <motion.div {...fadeUp}>
          <h2 className="serif" style={{ fontSize: 32, letterSpacing: "-0.5px", lineHeight: 1.25, fontWeight: 400 }}>
            {content.about.heading.map((line, i) => (
              <span key={i} style={{ display: "block", fontStyle: content.about.headingItalic[i] ? "italic" : "normal", color: content.about.headingItalic[i] ? "var(--text-muted)" : "var(--text)" }}>
                {line}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div {...fadeUp}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {content.about.body.map((p, i) => (
              <p key={i} style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75 }}>{p}</p>
            ))}
          </div>

          {/* Quote */}
          <div style={{ borderLeft: "2px solid var(--border-strong)", paddingLeft: "1.25rem", marginTop: "1.5rem" }}>
            <p className="serif" style={{ fontSize: 18, fontStyle: "italic", fontWeight: 500, color: "var(--text)", lineHeight: 1.4 }}>
              {content.about.quote}
            </p>
          </div>

          {/* Credentials */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginTop: "2rem" }}>
            {content.about.credentials.map((cred) => (
              <div key={cred.label} style={{ borderTop: "0.5px solid var(--border)", padding: "0.65rem 0" }}>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 2 }}>{cred.label}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{cred.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
