import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style.detail}>
      <div className={style.detailContainer}>
        <div className={style.detailImg}>
          <h1>{detail.name}</h1>
          <img src={detail.flags?.png} alt={detail.name} />
        </div>
        <div className={style.detailContent}>
          <h2>DATOS</h2>
          <h3>
            Id: <mark>{detail.id}</mark>
          </h3>
          <h3>
            Capital: <mark>{detail.capital}</mark>
          </h3>
          <h3>
            Continente: <mark>{detail.continents}</mark>
          </h3>
          <h3>
            Subregion:{" "}
            <mark>
              {detail.subregion ? detail.subregion : "No especificado"}
            </mark>
          </h3>
          <h3>
            Area: <mark>{detail?.area}</mark>
          </h3>
          <h3>
            Poblacion: <mark>{detail.population}</mark>
          </h3>
        </div>
        <div className={style.detailActivity}>
          {detail.Activities && detail.Activities.length > 0 && (
            <>
              <h2>Actividades en {detail.name}</h2>
              <img
                className={style.activityImg}
                src="/actividades.jpg"
                alt="actividades"
              />

              <ul className={style.detailUl}>
                {detail.Activities.map((activity) => (
                  <div key={activity.id}>
                    <h3>
                      Actividad: <mark>{activity.name}</mark>
                    </h3>
                    <h3>
                      Dificultad: <mark>{activity.difficulty}</mark>
                    </h3>
                    <h3>
                      Duración: <mark>{activity.duration} Hrs.</mark>
                    </h3>
                    <h3>
                      Temporada: <mark>{activity.season}</mark>
                    </h3>
                  </div>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
