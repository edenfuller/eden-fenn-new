/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = css`
  position: relative;
  height: 100px;
  width: 100%;
  z-index: 1;
  top: 60px;
  overflow: visible;

  .bg,
  .inverse {
    width: 102vw;
    top: 35px;
    height: 30px;
    transform: rotateZ(-2deg) translateY(10px);

    z-index: -1;
    left: -1vw;
    position: absolute;
  }

  .inverse {
    overflow: hidden;
    background: var(--color-pink);
  }

  .inverse {
    position: absolute;
  }

  h1,
  h2 {
    margin: 0 0 0 0;
    position: absolute;
    color: var(--color-pink);
  }

  h1 {
    font-size: 5rem;
    line-height: 5rem;
    bottom: 15px;
    left: 1vw;
    animation: appearFromRight 0.4s 0.3s ease-out both;
  }

  h2 {
    font-size: 3.5rem;
    line-height: 3.5rem;
    bottom: 11px;
    right: 1vw;
    animation: appearFromBottom 0.4s 0.5s ease-out both;
  }

  .inverse h1,
  .inverse h2 {
    color: var(--color-black);
  }

  .inverse h1 {
    animation-name: appearFromLeft;
  }

  .inverse h2 {
    animation-name: appearFromTop;
  }
`;

export default function Header({ page }) {
  return (
    <div css={styles}>
      <div className="bg">
        <h1>{page}</h1>
        <h2>eden fenn</h2>
      </div>
      <div className="inverse">
        <h1>{page}</h1>
        <h2>eden fenn</h2>
      </div>
    </div>
  );
}
