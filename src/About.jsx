import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import markdown from "./README.md";

export default function About() {
  return <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>;
}
