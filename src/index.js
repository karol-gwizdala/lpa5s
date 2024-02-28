import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { SelectedUserContextProvider } from "./contexts/SelectedUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <SelectedUserContextProvider>
        <App />
      </SelectedUserContextProvider>
    </HashRouter>
  </React.StrictMode>
);
