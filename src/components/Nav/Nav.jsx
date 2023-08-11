import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.navMenu}>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/activity">
          <li>Activity</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </div>
      <div className={style.navSearch}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Nav;
