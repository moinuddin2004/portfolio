"use client";

import { content } from "@/data/content";

export default function Currently() {
  const parts = content.currently.split("eOcean");

  return (
    <div
      style={{
        borderBottom: "0.5px solid var(--border)",
        padding: "0.9rem 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 14,
          color: "var(--text-muted)",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div className="pulse-dot" />
        <span>
          {parts[0]}
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>
            eOcean
          </strong>
          {parts[1]}
        </span>
      </div>
    </div>
  );
}
