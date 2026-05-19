"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { content } from "@/data/content";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function Hero() {
  return (
    <div
      style={{
        borderBottom: "0.5px solid var(--border)",
        padding: "5rem 2rem 4rem",
      }}
    >
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "end",
          maxWidth: 1200,
          margin: "0 auto",
          gap: "3rem",
        }}
      >
        {/* Left Column */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Eyebrow with Profile Photo */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: "1.5rem",
            }}
          >
            {/* Circular Profile Photo */}
            <div className="profile-pic-wrapper ring-2 ring-[var(--border-strong)] ring-offset-4 ring-offset-[var(--bg)] rounded-full">
              <Image
                src="/mypic.jpeg"
                alt={content.name}
                width={80}
                height={80}
                className="profile-pic rounded-full"
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                width: 10,
                height: "0.5px",
                background: "var(--text-muted)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 13,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              {content.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="serif"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-2px",
              lineHeight: 1.05,
              fontWeight: 400,
              marginBottom: "1.5rem",
            }}
          >
            {content.headline.map((line, i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  fontStyle: content.headlineItalic[i] ? "italic" : "normal",
                  color: content.headlineItalic[i]
                    ? "var(--text-muted)"
                    : "var(--text)",
                }}
              >
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 16,
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: 440,
              marginBottom: "2rem",
            }}
          >
            {content.subheadline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: "0.75rem" }}
          >
            <a
              href="#contact"
              style={{
                fontSize: 14,
                fontWeight: 500,
                padding: "10px 24px",
                background: "var(--text)",
                color: "var(--bg)",
                borderRadius: 100,
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              style={{
                fontSize: 14,
                fontWeight: 500,
                padding: "10px 24px",
                background: "transparent",
                color: "var(--text)",
                border: "0.5px solid var(--border)",
                borderRadius: 100,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-strong)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              View Work
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column — Stats */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {content.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{
                borderTop: "0.5px solid var(--border)",
                paddingTop: "0.65rem",
              }}
            >
              <div
                className="serif"
                style={{
                  fontSize: 32,
                  letterSpacing: "-1px",
                  fontWeight: 400,
                  color: "var(--text)",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  marginTop: 2,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
