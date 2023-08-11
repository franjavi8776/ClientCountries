import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Search.module.css";
import { logoutUser, searchCountryByName } from "../../redux/actions";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchCountryByName(search));
    setSearch("");
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleLogout = () => {
    dispatch(logoutUser());

    navigate("/");
  };

  return (
    <div className={style.search}>
      <div>
        <input
          type="text"
          placeholder="Buscar Pais por su nombre"
          value={search}
          onChange={handleChange}
          ref={inputRef}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default SearchBar;
