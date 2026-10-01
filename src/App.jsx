import { useState } from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import { useEffect } from "react";
import Catalog from "./components/Catalog";
import ShoppingCart from "./components/ShoppingCart";
import ThemeContext from "./context/ThemeContext";
import { useContext } from "react";
import Login from "./components/Login";
import Info from "./components/Info";

function App() {
  const navigate = useNavigate();
  const currentTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(currentTheme);

  const [auth, setAuth] = useState(false);

  const currentCart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(currentCart);

  const handleClick = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => sessionStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  const handleClick2 = () => {
    if (document.cookie !== "token=") {
      document.cookie = "token=";
      setAuth(false);
    } else {
      navigate("/login");
    }
  };
  return (
    <div className={`app-container theme-${theme}`}>
      <button onClick={handleClick}> Сменить тему</button>
      <button onClick={handleClick2}>{auth ? "Выйти" : "Войти"}</button>
      <div>
        <NavLink to="/">Главная</NavLink> |
        <NavLink to="/catalog">Каталог</NavLink> |
        <NavLink to="/cart">Корзина</NavLink>
      </div>
      <p>--------------------------------</p>
      <Routes>
        <Route
          path="/"
          element={<Info theme={theme} auth={auth} cart={cart} />}
        />
        <Route path="/catalog" element={<Catalog setCart={setCart} />} />
        <Route
          path="/cart"
          element={<ShoppingCart cart={cart} setCart={setCart} />}
        />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
      </Routes>
    </div>
  );
}

export default App;
