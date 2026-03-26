import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Đảm bảo đã import cái này
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/HRM-system">
    <App />
  </BrowserRouter>
);
