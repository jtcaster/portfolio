export default function PhotoColumn({ photos }) {
    return (
      <div>
        {photos.map((p, i) => (
          <div key={i} className="media-block">
            <h2>{p.title}</h2>
            <p className="sub">{p.description}</p>
  
            <div className="responsive">
              <img src={p.src} alt={p.title} />
            </div>
          </div>
        ))}
      </div>
    );
  }