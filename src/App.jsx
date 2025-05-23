/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  useLocation,
  Navigate,
} from "react-router";
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
    transition: all 0.2s ease-out;
    position: relative;

    .bg {
      clip-path: polygon(41% 0%, 41% 0%, 58% 100%, 58% 100%);
      width: 100%;
      height: 100%;
      position: absolute;
      background: var(--gradient-gold);
      transition: all 0.4s ease-out;
      z-index: -1;
    }

    a:hover {
      transform: scale(1.1);
    }

    &.selected {
      .bg {
        animation: clip-in 0.4s ease-out both;
      }
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
              <div className="bg" />
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
  return <Navigate replace to="/about" />;
}

function App() {
  const [updating, setUpdating] = useState(true);
  const location = useLocation;
  const lastLocation = useRef(location);

  useEffect(() => {
    if (location.path !== lastLocation.current.path) {
      setUpdating(true);

      setTimeout(setUpdating(false), 1000);
    }
    lastLocation.current = location;
  }, [location]);

  const router = createBrowserRouter([
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
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
