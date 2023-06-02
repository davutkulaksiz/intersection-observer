import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { lazy, Suspense } from "react";

const getGallery = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./pages/Gallery"));
    }, 3000);
  });

const Gallery = lazy(getGallery);

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Suspense fallback="Gallery is loading...">
        <Gallery />
      </Suspense>
    </>
  );
}

export default App;
