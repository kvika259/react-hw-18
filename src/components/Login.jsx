import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setAuth }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    document.cookie = `token=${token}`;
    setAuth(true);
    navigate("/catalog");
  };
  return (
    <div>
      <h2>Регистрация </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя</label>
          <input
            value={name}
            id="name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="token">Токен</label>
          <input
            value={token}
            id="token"
            onChange={e => setToken(e.target.value)}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default Login;
