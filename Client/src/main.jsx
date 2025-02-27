import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import React from "react";

import DetailsProvider from "./context/DetailsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DetailsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DetailsProvider>
);
