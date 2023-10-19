import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Welcome from "./components/Welcome/Welcome";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Register from "./components/Login/Register";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" &&
        !pathname.startsWith("/login") &&
        !pathname.startsWith("/register") && <Nav />}

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activity" element={<Form />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
