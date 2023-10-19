import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions";
import style from "./Register.module.css";
import validation from "./validation";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userExists = useSelector((state) => state.userExists);
  console.log(userExists);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  if (userExists) {
    navigate("/");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors(validation({ ...user, [name]: value }));
  };

  return (
    <div className={style.register}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
          {errors.email ? (
            <span style={{ color: "red" }}>{errors.email}</span>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          {errors.password ? (
            <span style={{ color: "red" }}>{errors.password}</span>
          ) : null}
        </div>
        {userExists && <span style={{ color: "red" }}>Usuario ya existe</span>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
