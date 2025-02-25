import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createApp } from "./pixi-app";
import "./index.css";
import App from "./App.tsx";

createApp();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
