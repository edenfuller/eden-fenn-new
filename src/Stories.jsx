/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useLoaderData, Link } from "react-router";

import washedClean from "./washed-clean.md";
import gaiaHypothesis from "./gaia-hypothesis.md";
import fiveSixSeven from "./five-six-seven.md";

import Reader from "./Reader";

const stories = {
  "washed-clean": {
    title: "Washed Clean",
    credit: "published in Nature Futures March 2020",
    markdown: washedClean,
  },
  "gaia-hypothesis": {
    title: "Gaia Hypothesis",
    credit: "published in Daily Science Fiction April 2020",
    markdown: gaiaHypothesis,
  },
  "five-six-seven": {
    title: "Five Six Seven",
    credit: "published in Asimov's Science Fiction Magazine #462",
    markdown: fiveSixSeven,
  },
};

const styles = css`
  ul {
    flex-direction: column;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  p {
    margin-top: 0;
  }

  a {
    font-family: var(--font-family-header);
    font-size: 3rem;
  }
`;

export default function Stories() {
  const { story } = useLoaderData() || {};
  if (story && stories[story]) return <Reader />;

  return (
    <main css={styles}>
      <ul>
        {Object.keys(stories).map((storyName, i) => (
          <li key={`story-${i + 1}`}>
            <Link to={`/stories/${storyName}`}>{stories[storyName].title}</Link>
            <p>{stories[storyName].credit}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
