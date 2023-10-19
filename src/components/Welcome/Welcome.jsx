import { Link } from "react-router-dom";
import Login from "../Login/Login";

import style from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={style.welcome}>
      <div className={style.welcomeLogin}>
        <h1>Welcome to Countries App</h1>
        <img className={style.welcomeImg} src="/paises.webp" alt="img" />
        <Login />
        <Link to="/register">
          <h3>Click Here!!! if you don´t have an account</h3>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
