import { useEffect } from "react";

export default function MediaItem({ item }) {
  useEffect(() => {
    if (item.type === "instagram") {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, [item]);

  return (
    <div className="media-block">
      <h2>{item.title}</h2>
      <p className="sub">{item.description}</p>

      {item.type === "youtube" && (
        <div className="responsive">
          <iframe
            src={`https://www.youtube.com/embed/${item.embedId}`}
            title={item.title}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}

      {item.type === "instagram" && (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={item.embedUrl}
          style={{ width: "100%" }}
        />
      )}

      {item.type === "link" && (
        <a href={item.url} target="_blank" rel="noreferrer" className="link">
          View Project
        </a>
      )}
    </div>
  );
}