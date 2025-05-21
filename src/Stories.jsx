import { useLoaderData } from "react-router";

export default function Stories() {
  const { story } = useLoaderData() || {};
  return <div>Stories page with story {story}</div>;
}
