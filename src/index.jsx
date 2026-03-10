import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { StoreProvider } from "app/providers/StoreProvider";
import { bootstrap } from "app/bootstrap";
import App from "./app/App";
import "./index.css";

bootstrap();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
);
