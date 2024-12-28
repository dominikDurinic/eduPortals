import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { WindowSizeContextProvider } from "./context/WindowSizeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WindowSizeContextProvider>
      <App />
    </WindowSizeContextProvider>
  </StrictMode>
);
