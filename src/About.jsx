import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import markdown from "./about.md";

export default function About() {
  return (
    <main>
      <div className="text-area">
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      </div>
    </main>
  );
}
