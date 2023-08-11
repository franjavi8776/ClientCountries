import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  filterByContinent,
  filterByActivity,
  orderByName,
  orderByPopulation,
} from "../../redux/actions";
import style from "./Home.module.css";
import Card from "../Card/Card";

const Home = () => {
  const [name, setName] = useState(false);
  const [population, setPopulation] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const searchCountry = useSelector((state) => state.searchCountry);

  const pageSize = 10;
  const totalCountries =
    searchCountry.length > 0 ? searchCountry.length : countries.length;
  const totalPages = Math.ceil(totalCountries / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const renderCountries = searchCountry.length > 0 ? searchCountry : countries;
  const endIndex = startIndex + pageSize;
  const countriesToRender = renderCountries.slice(startIndex, endIndex);

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

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFilterByContinent = (e) => {
    setSelectedContinent(e.target.value);
    dispatch(filterByContinent(e.target.value));
  };

  const handleFilterByActivity = (e) => {
    setSelectedActivity(e.target.value);
    dispatch(filterByActivity(e.target.value));
  };

  const handleOrderByName = (e) => {
    dispatch(orderByName(e.target.value));
    setName(!name);
  };

  const handleOrderByPolutation = (e) => {
    dispatch(orderByPopulation(e.target.value));
    setPopulation(!population);
  };

  return (
    <div className={style.home}>
      <div className={style.homeFilters}>
        <select onChange={handleFilterByContinent} value={selectedContinent}>
          <option value="">Filtro p/Continente</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Europe">Europa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antartida</option>
        </select>


        
        <select onChange={handleFilterByActivity} value={selectedActivity}>
          <option value="">Filtro p/Actividad</option>
          {activitiesAroundTheWorld.map((act, i) => (
            <option key={i} value={act}>
              {act}
            </option>
          ))}
        </select>
        <select onChange={handleOrderByName}>
          <option value="">Ordenar p/Nombre</option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleOrderByPolutation}>
          <option value="">Ordenar p/Habitantes</option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </div>
      <div className={style.homeNumber}>
        {countriesToRender.length === pageSize && <p>Pagina {currentPage}</p>}
      </div>
      <div className={style.homePage}>
        <div>
          {currentPage > 1 && (
            <button className={style.btnL} onClick={handlePreviousPage}>
              P
            </button>
          )}
        </div>
        <div className={style.homeCards}>
          {countriesToRender.map(({ id, name, flags, continents }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                flags={flags}
                continents={continents}
              />
            );
          })}
        </div>
        <div>
          {currentPage < totalPages && (
            <button className={style.btnR} onClick={handleNextPage}>
              N
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
