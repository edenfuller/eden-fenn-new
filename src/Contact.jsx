import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import markdown from "./contact.md";

export default function Contact() {
  return (
    <main>
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
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
