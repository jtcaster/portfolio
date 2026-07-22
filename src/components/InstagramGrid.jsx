import { useEffect } from "react";

export default function InstagramGrid({ reels }) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [reels]);

  return (
    <section className="ig-section">
      <h1 className="ig-header">Instagram Reels</h1>

      <div className="ig-grid">
        {reels.map((url, i) => (
          <div key={i} className="ig-item">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
            />
          </div>
        ))}
      </div>
    </section>
  );
}