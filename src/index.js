import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "mapbox-gl/dist/mapbox-gl.css";
import "./css/app.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
