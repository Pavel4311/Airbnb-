import { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      password: password,
      login: login,
    };
    console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    setLogin("");
    setPassword("");
    navigate("/");
  };
  return (
    <div className="login-group">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="submit-btn" onClick={navigate}>
          Сщхранить
        </button>
      </form>
    </div>
  );
};

export default Form;
