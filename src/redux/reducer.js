import {
  GET_COUNTRIES,
  GET_DETAIL,
  SEARCH_COUNTRY,
  ADD_ACTIVITY,
  GET_ACTIVITIES,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  LOGIN_USER,
  LOGOUT_USER,
  USER_EXISTS,
} from "./actions";

const initialState = {
  countries: [],
  allCountries: [],
  searchCountry: [],
  detail: {},
  activities: [],
  isAuthenticated: false,
  token: localStorage.getItem("token") || null,
  userExists: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        searchCountry: action.payload,
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case FILTER_BY_CONTINENT:
      return {
        ...state,
        countries: state.allCountries.filter(
          (country) => country.continents === action.payload
        ),
      };
    case FILTER_BY_ACTIVITY:
      return {
        ...state,
        countries: state.allCountries.filter((country) =>
          country.Activities.some(
            (activity) => activity.name === action.payload
          )
        ),
      };
    case ORDER_BY_NAME: {
      const orderDirection = action.payload === "A" ? 1 : -1;

      return {
        ...state,
        countries: state.countries.slice().sort((a, b) => {
          return a.name.localeCompare(b.name) * orderDirection;
        }),
      };
    }
    case ORDER_BY_POPULATION: {
      const orderPopulation = [...state.countries];
      return {
        ...state,
        countries:
          action.payload === "A"
            ? orderPopulation.sort((a, b) => a.population - b.population)
            : orderPopulation.sort((a, b) => b.population - a.population),
      };
    }
    case LOGIN_USER:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        userExists: false,
      };
    case USER_EXISTS:
      return {
        ...state,
        userExists: true,
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return { ...state };
  }
};

export default reducer;
