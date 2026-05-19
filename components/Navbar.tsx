"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/data/content";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--bg)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.85rem 2rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Left: Name */}
        <a
          href="#"
          className="serif"
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "-0.3px",
          }}
        >
          {content.name}
        </a>

        {/* Center: Nav links (desktop) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Theme + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <ThemeToggle />
          <a
            href="#contact"
            className="nav-cta"
            style={{
              fontSize: 14,
              color: "var(--text)",
              textDecoration: "none",
              border: "0.5px solid var(--border)",
              borderRadius: 100,
              padding: "6px 16px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--text)";
              e.currentTarget.style.color = "var(--bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            Let&apos;s Talk →
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--text)",
              padding: 4,
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              borderTop: "0.5px solid var(--border)",
            }}
            className="nav-mobile-menu"
          >
            <div style={{ padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: 14,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}
