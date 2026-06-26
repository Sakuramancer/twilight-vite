import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "app/App";
import { bootstrap } from "app/bootstrap";
import { StoreProvider } from "app/providers";
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
