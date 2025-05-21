import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import markdown from "./contact.md";

export default function Contact() {
  return <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>;
}
