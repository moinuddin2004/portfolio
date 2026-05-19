"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function Experience() {
  return (
    <div style={{ padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
      <div className="sec-label">Experience</div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {content.experience.map((exp, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            className="exp-row"
            style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr",
              gap: "2rem",
              borderBottom: "0.5px solid var(--border)",
              paddingBottom: "2rem",
              paddingTop: i === 0 ? 0 : "2rem",
            }}
          >
            {/* Left */}
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--text)",
                }}
              >
                {exp.company}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  marginTop: 2,
                }}
              >
                {exp.period}
              </div>
            </div>

            {/* Right */}
            <div>
              <div
                className="serif"
                style={{
                  fontSize: 24,
                  letterSpacing: "-0.3px",
                  fontWeight: 400,
                  color: "var(--text)",
                  marginBottom: "0.5rem",
                }}
              >
                {exp.role}
              </div>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  maxWidth: 520,
                  marginBottom: "1rem",
                }}
              >
                {exp.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
