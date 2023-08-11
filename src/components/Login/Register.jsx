import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions";
import style from "./Register.module.css";
import validation from "./validation";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors(validation({ ...user, [name]: value }));
  };

  return (
    <div className={style.register}>
      <h2>Register, if you don´t have an account</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
