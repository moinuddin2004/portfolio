"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

function ContactIcon({ icon }: { icon: string }) {
  const props = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (icon) {
    case "mail":
      return (<svg {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
    case "phone":
      return (<svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
    case "linkedin":
      return (<svg {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
    case "github":
      return (<svg {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>);
    case "twitter":
      return (<svg {...props}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>);
    default:
      return null;
  }
}

export default function Contact() {
  return (
    <div style={{ padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
      <div className="sec-label">Contact</div>
      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
        {/* Left */}
        <motion.div {...fadeUp}>
          <h2 className="serif" style={{ fontSize: 48, letterSpacing: "-1.5px", lineHeight: 1.1, fontWeight: 400, color: "var(--text)", marginBottom: "1rem" }}>
            {content.contact.heading}
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7 }}>{content.contact.subtext}</p>
        </motion.div>

        {/* Right */}
        <motion.div {...fadeUp}>
          {content.contact.links.map((link, i) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "0.85rem 0", borderBottom: i < content.contact.links.length - 1 ? "0.5px solid var(--border)" : "none", textDecoration: "none", color: "var(--text)", transition: "opacity 0.2s ease" }}
              onMouseEnter={(e) => { const box = e.currentTarget.querySelector(".icon-box") as HTMLElement; if (box) box.style.background = "var(--bg-secondary)"; }}
              onMouseLeave={(e) => { const box = e.currentTarget.querySelector(".icon-box") as HTMLElement; if (box) box.style.background = "transparent"; }}>
              <div className="icon-box" style={{ width: 32, height: 32, border: "0.5px solid var(--border)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s ease", color: "var(--text-muted)" }}>
                <ContactIcon icon={link.icon} />
              </div>
              <span style={{ fontSize: 14, color: "var(--text)" }}>{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
