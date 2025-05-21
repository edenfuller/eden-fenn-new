/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = css`
  position: fixed;
  bottom: 1rem;
  height: 5rem;
  width: 100%;
  z-index: 1;

  .bg {
    width: 102vw;
    height: 100%;
    left: -1vw;
    background: var(--color-pink);
    transform: rotateZ(2deg);
    position: absolute;
    z-index: -1;
  }

  h1,
  h2 {
    margin: 0 0 0 0;
    position: absolute;
    color: var(--color-black);
  }

  h1 {
    font-size: 5rem;
    line-height: 5rem;
    bottom: -11px;
    left: 1vw;
  }

  h2 {
    font-size: 3.5rem;
    line-height: 3.5rem;
    top: -5px;
    right: 1vw;
  }

  @media (min-width: 990px) {
    bottom: 1rem;
  }
`;

export default function Header({ page }) {
  return (
    <div css={styles}>
      <div className="bg">
        <div className="inner">
          <h1>{page}</h1>
          <h2>eden fenn</h2>
        </div>
      </div>
    </div>
  );
}
