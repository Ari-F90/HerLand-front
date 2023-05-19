import React from "react";
import { createRoot } from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import App from "./core/app/app";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.querySelector(".container")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
