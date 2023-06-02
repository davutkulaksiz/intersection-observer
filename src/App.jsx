import wowLogo from "./assets/WoW_icon.svg";
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
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={wowLogo} className="logo react" alt="WoW logo" />
        </a>
      </div>
      <Suspense fallback={<h2>Gallery is loading...</h2>}>
        <Gallery />
      </Suspense>
    </>
  );
}

export default App;
