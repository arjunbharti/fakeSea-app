import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FiltersProvider } from "./contexts/filters-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
