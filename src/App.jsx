import "./styles.css";
import InstagramGrid from "./components/InstagramGrid";
import Collapsible from "./components/Collapsible";
import PhotoColumn from "./components/PhotoColumn";
import { items, reels, photos } from "./data";
import MediaItem from "./components/MediaItem";

export default function App() {
  return (
    <div className="container">
      <header className="header">
  <img src="/JC Logo.png" alt="logo" className="logo-img" />
  <div className="name">Jonas Caster - jtcaster02@gmail.com</div>
</header>

      <main>
      <div>A1 Audio Engineer, V1 Video Engineer, Camera Op, Music Producer, Playback Op, Video Editor, Social Media Manager, Playback Op, Studio Mixing / Mastering, Installation</div>

  <Collapsible title="AV Work (Photos)" defaultOpen={true}>
    <PhotoColumn photos={photos} />
  </Collapsible>

  <Collapsible title="YouTube">
    {items.map((item) => (
      <MediaItem key={item.id} item={item} />
    ))}
  </Collapsible>

  <Collapsible title="Instagram Reels">
    <InstagramGrid reels={reels} />
  </Collapsible>
  <div>____________________________________________</div>
        <a href="https://www.instagram.com/prod.boba/">Instagram</a>
        <a> </a>
        <a href="mailto:jtcaster02@gmail.com">Email</a>
</main>
    </div>
  );
}