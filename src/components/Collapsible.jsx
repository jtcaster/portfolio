import { useState } from "react";

export default function Collapsible({ title, children }) {
  const [open, setOpen] = useState(false); // all collapsed by default

  return (
    <section className="section">
      <button
        className={`section-header ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span className={`chevron ${open ? "open" : ""}`}>▾</span>
      </button>

      {open && <div className="section-content">{children}</div>}
    </section>
  );
}