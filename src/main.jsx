import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/css/global.css";
import "./assets/css/navbar.css";
import "./assets/css/footer.css";
import "./assets/css/home.css";
import "./assets/css/jobs.css";
import "./assets/css/auth.css";
import "./assets/css/dashboard.css";
import "./assets/css/responsive.css";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);