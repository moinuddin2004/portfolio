"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function Projects() {
  return (
    <div style={{ padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
      <div className="sec-label">Projects</div>
      <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }}>
        {content.projects.map((project, i) => (
          <motion.div key={i} {...fadeUp} style={{ background: "var(--bg)", padding: "2rem", transition: "box-shadow 0.25s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 0 0.5px var(--border-strong)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>{project.number}</div>
            <div className="serif" style={{ fontSize: 24, letterSpacing: "-0.5px", fontWeight: 400, color: "var(--text)", marginBottom: "0.5rem" }}>{project.name}</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6, marginBottom: "1rem" }}>
              {project.status === "Live" && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--text)", display: "inline-block" }} />}
              {project.status}
            </div>
            <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>{project.description}</p>
            <div style={{ borderLeft: "2px solid var(--border-strong)", paddingLeft: "1rem", marginBottom: "1.25rem" }}>
              <p className="serif" style={{ fontSize: 16, fontStyle: "italic", color: "var(--text)", lineHeight: 1.5 }}>{project.highlight}</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.25rem" }}>
              {project.stack.map((t) => (<span key={t} className="tag">{t}</span>))}
            </div>
            <div style={{ display: "flex", gap: "1.25rem" }}>
              {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "var(--text)", textDecoration: "none", borderBottom: "0.5px solid var(--border)", paddingBottom: 2 }}>Live ↗</a>}
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "var(--text)", textDecoration: "none", borderBottom: "0.5px solid var(--border)", paddingBottom: 2 }}>GitHub ↗</a>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
