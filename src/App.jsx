/** @jsxImportSource @emotion/react */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createHashRouter, RouterProvider, Link } from "react-router";
import Home from "./Home";
import Stories from "./Stories";
import About from "./About";
import Contact from "./Contact";
import { css } from "@emotion/react";

const navStyles = css`
  width: 800px;
  max-width: 100vw;

  li {
    width: 25%;

    &.selected {
      background: var(--gradient-gold);
      * {
        color: var(--color-black);
      }
    }
  }
`;

function NavWrapper({ children }) {
  return (
    <>
      <nav css={[navStyles]}>
        <ul>
          {["home", "stories", "about", "contact"].map((path) => (
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
      </nav>
      {children}
    </>
  );
}

function StoriesWrapper() {
  return (
    <NavWrapper>
      <Stories />
    </NavWrapper>
  );
}

function ContactWrapper() {
  return (
    <NavWrapper>
      <Contact />
    </NavWrapper>
  );
}

function AboutWrapper() {
  return (
    <NavWrapper>
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
      Component: HomeWrapper,
    },
  ]);

  return (
    <main className="App">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
