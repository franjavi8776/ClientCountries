import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity, getAllCountries } from "../../redux/actions";
import style from "./Form.module.css";

const Form = () => {
  const [activityData, setActivityData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [countriesLoaded, setCountriesLoaded] = useState(false);

  const activitiesAroundTheWorld = [
    "Montañismo",
    "Safari fotográfico",
    "Senderismo",
    "Buceo",
    "Explorar sitios históricos",
    "Navegación",
    "Visitar monumentos",
    "Recorrer rutas famosas",
    "Explorar lugares antiguos",
    "Caminar en naturaleza",
    "Esquiar",
    "Visitar atracciones icónicas",
    "Hacer surf",
    "Nadar con animales marinos",
    "Explorar selvas",
    "Cruzar puentes emblemáticos",
    "Visitar sitios arqueológicos",
    "Hacer deportes extremos",
    "Navegar ríos",
    "Caminar en cañones",
    "Visitar monumentos famosos",
    "Hacer actividades acuáticas",
    "Explorar bosques",
    "Navegar por bahías",
    "Visitar estructuras históricas",
    "Hacer deportes de arena",
    "Caminar por paisajes naturales",
    "Explorar paisajes desérticos",
    "Navegar canales",
    "Visitar islas remotas",
    "Caminar por murallas",
    "Explorar ruinas",
    "Navegar mares",
    "Hacer avistamiento de vida silvestre",
    "Visitar monumentos emblemáticos",
    "Hacer actividades aéreas",
    "Explorar construcciones antiguas",
    "Navegar en lagos",
    "Visitar sitios espirituales",
    "Hacer parapente",
    "Explorar estructuras defensivas",
    "Navegar océanos",
    "Hacer paracaidismo",
    "Visitar sitios culturales",
    "Explorar cuevas",
    "Hacer esnórquel",
    "Visitar ruinas históricas",
    "Hacer ciclismo",
  ];

  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivityData({ ...activityData, [name]: value });
  };

  const handleCountrySelect = (e) => {
    const { value } = e.target;

    if (!countriesLoaded) {
      dispatch(getAllCountries());
      setCountriesLoaded(true);
    }
    // Verifica si el país ya está seleccionado, si lo está, lo deselecciona, de lo contrario, lo agrega a la lista de países seleccionados
    if (activityData.countries.includes(value)) {
      setActivityData({
        ...activityData,
        countries: activityData.countries.filter(
          (country) => country !== value
        ),
      });
    } else {
      setActivityData({
        ...activityData,
        countries: [...activityData.countries, value],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías realizar cualquier validación necesaria antes de guardar la actividad

    // Despacha la acción para agregar la nueva actividad al estado de Redux
    dispatch(addActivity(activityData));

    // Limpia el formulario después de guardar la actividad
    setActivityData({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
  };

  return (
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2>Crear Actividades de Paises</h2>
        <div className={style.formInput}>
          <label>Actividad</label>
          <select name="name" value={activityData.name} onChange={handleChange}>
            <option value="">Seleccione actividad</option>
            {activitiesAroundTheWorld.map((activity, i) => (
              <option key={i} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        </div>
        <div className={style.formInput}>
          <label>Dificultad</label>
          <select
            name="difficulty"
            value={activityData.difficulty}
            onChange={handleChange}
          >
            <option value="">Seleccione dificultad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className={style.formInput}>
          <label>Duracion/Hrs</label>
          <select
            name="duration"
            value={activityData.duration}
            onChange={handleChange}
          >
            <option value="">Seleccione duracion</option>
            {Array.from({ length: 100 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className={style.formInput}>
          <label>Temporada</label>
          <select
            name="season"
            value={activityData.season}
            onChange={handleChange}
          >
            <option value="">Seleccion temporada</option>
            <option value="Primavera">Primavera</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
          </select>
        </div>
        <div className={style.formInput}>
          <label htmlFor="countries">Países:</label>
          <select
            name="countries"
            multiple // Habilita la selección múltiple
            value={activityData.countries}
            onChange={handleCountrySelect}
          >
            <option value="">Seleccione uno o varios Paises</option>
            {allCountries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className={style.formBtn}>
          <input type="submit" value="Crear actividad" />
        </div>
      </form>
    </div>
  );
};

export default Form;
