import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, name, flags, continents }) => {
  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className={style.card}>
          <h2 className={style.cardContent}>{name}</h2>
          <img className={style.cardImg} src={flags.png} alt={name} />
          <h3 className={style.cardContent}>{continents}</h3>
        </div>
      </Link>
    </>
  );
};

export default Card;
