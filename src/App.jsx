/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { createHashRouter, RouterProvider, Link } from "react-router";
import Home from "./Home";
import Stories from "./Stories";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import { css } from "@emotion/react";

const navStyles = css`
  width: 100%;
  max-width: 100vw;

  .divider {
    width: 100%;
    height: 2px;
    background: var(--gradient-gold-border);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  li {
    width: 200px;
    max-width: 33%;
    height: 60px;
    display: flex;
    place-items: center;
    justify-content: center;
    clip-path: polygon(0 0, calc(100% - 8%) 0, 100% 100%, calc(0% + 8%) 100%);

    &.selected {
      background: var(--gradient-gold);
      * {
        color: var(--color-black);
      }
    }
  }
`;

function NavWrapper({ children, page }) {
  return (
    <>
      <nav css={[navStyles]}>
        <ul>
          {["stories", "about", "contact"].map((path) => (
            <li
              key={path}
              className={
                window?.location?.href?.includes(path) ? "selected" : ""
              }
            >
              <Link to={`/${path}`}>{path}</Link>
            </li>
          ))}
        </ul>
        <div className="divider"></div>
      </nav>
      <Header page={page} />
      {children}
    </>
  );
}

function StoriesWrapper() {
  return (
    <NavWrapper page="stories">
      <Stories />
    </NavWrapper>
  );
}

function ContactWrapper() {
  return (
    <NavWrapper page="contact">
      <Contact />
    </NavWrapper>
  );
}

function AboutWrapper() {
  return (
    <NavWrapper page="about">
      <About />
    </NavWrapper>
  );
}

function HomeWrapper() {
  return (
    <NavWrapper>
      <Home />
    </NavWrapper>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const router = createHashRouter([
    {
      path: "stories/:story",
      loader: async ({ params }) => {
        const { story } = params;
        return { story };
      },
      Component: StoriesWrapper,
    },
    {
      path: "stories",
      Component: StoriesWrapper,
    },
    {
      path: "about",
      Component: AboutWrapper,
    },
    {
      path: "contact",
      Component: ContactWrapper,
    },
    {
      path: "*",
      Component: AboutWrapper,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
