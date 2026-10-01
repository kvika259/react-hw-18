import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContext from "./context/ThemeContext";

const initialTheme = localStorage.getItem("theme") || "light";

createRoot(document.getElementById("root")).render(
  <ThemeContext.Provider value={initialTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContext.Provider>,
);
