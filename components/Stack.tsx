"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function Stack() {
  return (
    <div style={{ padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
      <div className="sec-label">Stack</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2.5rem" }}>
        {content.stack.map((group, i) => (
          <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
            <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
              {group.category}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {group.items.map((item) => (
                <div key={item} style={{ fontSize: 16, fontWeight: 500, color: "var(--text)" }}>{item}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
