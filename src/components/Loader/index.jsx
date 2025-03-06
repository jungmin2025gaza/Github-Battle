import "./styles.css";
import { useState, useEffect } from "react";

export default function Loader() {
  const [content, setContent] = useState("Loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setContent((prevContent) => (
        prevContent === "Loading" + "..." ? "Loading" : prevContent + "."
      ));
    }, 300);
  }, []);

  return <div>{content}</div>;
}
