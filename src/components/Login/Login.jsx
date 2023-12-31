import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions";
import style from "./Login.module.css";
import validation from "./validation";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const token = useSelector((state) => state.token);
  console.log(token);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUser(user));
  }, [dispatch, user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (token) {
      navigate("/home");
    } else {
      navigate("/register");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors(validation({ ...user, [name]: value }));
  };

  return (
    <div className={style.login}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        {errors.email ? (
          <span style={{ color: "red" }}>{errors.email}</span>
        ) : null}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        {errors.password ? (
          <span style={{ color: "red" }}>{errors.password}</span>
        ) : null}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
