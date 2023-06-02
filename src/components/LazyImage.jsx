import { useState, useRef, useEffect } from "react";

const LazyImage = ({ url, width, height, alt }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  let callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return inView ? (
    <img src={url} width={width} height={height} alt={alt} />
  ) : (
    <img
      ref={ref}
      style={{ width: "1080px", height: "700px", backgroundColor: "#000000" }}
    />
  );
};

export default LazyImage;
