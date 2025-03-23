import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Google Analytics setup
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-D6WEKMWV7B");

const script = document.createElement("script");
script.async = true;
script.src = "https://www.googletagmanager.com/gtag/js?id=G-D6WEKMWV7B";
document.head.appendChild(script);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
