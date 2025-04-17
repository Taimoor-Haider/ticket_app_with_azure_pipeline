import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store.js";
import "./index.css";
import App from "./App.jsx";
import "./bootstrap.min.css";
createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </Router>
);
