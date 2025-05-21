import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import markdown from "./about.md";

export default function Home() {
  return (
    <main>
      <div className="image-area">
        <img
          className="headshot"
          src="/eden_headshot_gn.jpg"
          alt="Eden headshot"
        />
      </div>
    </main>
  );
}
