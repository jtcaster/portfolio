import { items } from "./data";
import MediaItem from "./components/MediaItem";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="portfolio\src\assets\JC Logo.png"></img>
        <div className="name">Jonas Caster</div>
      </header>

      <main>
        {items.map((item) => (
          <MediaItem key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
}