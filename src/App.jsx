import { items } from "./data";
import MediaItem from "./components/MediaItem";
import "./styles.css";
import InstagramGrid from "./components/InstagramGrid";
import { reels } from "./data"

export default function App() {
  return (
    <div className="container">
      <header className="header">
  <img src="/JC Logo.png" alt="logo" className="logo-img" />
  <div className="name">Jonas Caster - jtcaster02@gmail.com</div>
</header>

      <main>
        {items.map((item) => (
          <MediaItem key={item.id} item={item} />
        ))}
        <InstagramGrid reels={reels} />
      </main>
    </div>
  );
}