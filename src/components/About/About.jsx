import { Link } from "react-router-dom";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.divAbout}>
      <div className={style.container}>
        <div className={style.subcontainer}>
          <div className={style.card}>
            <div className={style.back}>
              <h2>Francisco Villarroel</h2>
              <p>
                Siempre he sentido un profundo interés por el campo del
                desarrollo y la programación de la tecnología. Estoy convencido
                de que cada cosa tiene su momento, y este es el momento preciso
                para mí como individuo para sumergirme por completo en el
                apasionante mundo de la tecnología de la información.
              </p>
              <p>franjavi871976@gmail.com</p>
              <div className={style.aboutContact}>
                <Link to="https://franjavi8776.github.io/portfolio/">
                  Portafolio
                </Link>
                <Link to="https://www.linkedin.com/in/francisco-villarroel-2945a1260/">
                  Linkedin
                </Link>
                <Link to="https://github.com/franjavi8776">Github</Link>
              </div>
            </div>
            <div className={style.front}>
              <img src="/yo.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
