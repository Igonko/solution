import Button from "@/components/button";
import { header } from "../utils/content";

export default function Home() {
  return (
    <main>
      <h4 className="sub-title">{header.pre}</h4>
      <h2 className="title">{header.title}</h2>
      <p className="content">{header.text}</p>
      <div className="btn-wrapper">
        {header.buttons.map((btn) => (
          <Button key={btn.text} text={btn.text} link={btn.link} className={btn.className} />
        ))}
      </div>
    </main>
  );
}
