import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
<BrowserRouter basename="/HRM-system">
  <App />
</BrowserRouter>
