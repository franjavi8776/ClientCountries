import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Register from "../Login/Register";
import Login from "../Login/Login";

import style from "./Welcome.module.css";

const Welcome = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={style.welcome}>
      <div className={style.welcomeLogin}>
        <h1>Welcome to Countries App</h1>
        <img className={style.welcomeImg} src="/paises.webp" alt="img" />
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default Welcome;
