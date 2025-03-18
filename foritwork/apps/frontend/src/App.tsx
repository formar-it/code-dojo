import { useEffect, useRef } from "react";
import { Application } from "pixi.js";
import "./App.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const init = async () => {
    const app = new Application();
    await app.init({
      background: "#1099bb",
      resizeTo: window,
      canvas: canvasRef.current!,
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
}

export default App;
