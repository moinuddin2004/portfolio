import { content } from "@/data/content";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid var(--border)",
        padding: "1.25rem 2rem",
      }}
    >
      <div
        className="footer-inner"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span
          className="serif"
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "var(--text)",
            letterSpacing: "-0.3px",
          }}
        >
          {content.footer.name}
        </span>
        <div
          className="footer-meta"
          style={{
            display: "flex",
            gap: "1.5rem",
            fontSize: 13,
            color: "var(--text-muted)",
          }}
        >
          <span>{content.footer.note}</span>
          <span>{content.footer.status}</span>
        </div>
      </div>
    </footer>
  );
}
