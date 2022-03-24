import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FiltersProvider } from "./contexts/filters-context";
import { AuthProvider } from "./contexts/auth-context";
import { WishlistProvider } from "./contexts/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FiltersProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </FiltersProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
