import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App";
import "../styles/tokens.css"; 
import "katex/dist/katex.min.css"; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Correct: The one and only BrowserRouter wrapper */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);