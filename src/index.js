// react hooks
import React from "react";

// import react dom package
import ReactDOM from "react-dom/client";

// import component
import App from "./App";

// import global style file
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
