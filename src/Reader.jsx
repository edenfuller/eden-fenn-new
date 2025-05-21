/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLoaderData, Link } from "react-router";

import washedClean from "./washed-clean.md";
import gaiaHypothesis from "./gaia-hypothesis.md";
import fiveSixSeven from "./five-six-seven.md";

const stories = {
  "washed-clean": washedClean,
  "five-six-seven": fiveSixSeven,
  "gaia-hypothesis": gaiaHypothesis,
};

const styles = css`
  text-align: left;
  h2 {
    background: var(--color-pink);
    color: var(--color-black);
    font-size: 3.5rem;
    line-height: 3.5rem;
    margin-bottom: 0;
    padding: 0 20px;
    display: inline-block;

    clip-path: polygon(
      0 0,
      calc(100% - 10px) 0,
      100% 100%,
      calc(0% + 10px) 100%
    );
  }

  h3 {
    font-size: 2.5rem;
    margin-top: -5px;
    padding-left: 20px;
    line-height: 2.5rem;
  }
`;

export default function Reader() {
  const { story } = useLoaderData() || {};
  console.log(story);
  return (
    <main css={styles} className="reader">
      <Link to="/stories">{"< back to stories"}</Link>
      <div className="text-area">
        <Markdown remarkPlugins={[remarkGfm]}>{stories[story]}</Markdown>
      </div>
    </main>
  );
}
