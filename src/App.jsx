import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createHashRouter,
  RouterProvider,
  HashRouter,
  Link,
} from "react-router";
import Home from "./Home";
import Stories from "./Story";
import About from "./About";

function NavWrapper({ children }) {
  return (
    <>
      <nav>
        <ul>
          {["home", "about", "stories"].map((path) => (
            <li key={path}>
              <Link
                className={
                  window?.location?.href?.includes(path) ? "selected" : ""
                }
                to={`/${path}`}
              >
                {path}
              </Link>
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
