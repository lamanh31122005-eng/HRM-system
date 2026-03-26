import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App.tsx";
import "./index.css";

// Toàn bộ ứng dụng phải nằm TRONG render và TRONG BrowserRouter
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/HRM-system">
    <App />
  </BrowserRouter>
);
