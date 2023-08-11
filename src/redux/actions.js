import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const getAllCountries = () => async (dispatch) => {
  try {
    const endpoint = `http://localhost:3001/countries`;
    const response = await axios.get(endpoint);
    const data = response.data;
    dispatch({ type: GET_COUNTRIES, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const getCountryDetail = (id) => async (dispatch) => {
  try {
    const endpoint = `http://localhost:3001/countries/${id}`;
    const response = await axios.get(endpoint);
    const data = response.data;
    dispatch({ type: GET_DETAIL, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const searchCountryByName = (name) => async (dispatch) => {
  try {
    const endpoint = `http://localhost:3001/countries/name?name=${name}`;
    const response = await axios.get(endpoint);
    const data = response.data;
    dispatch({
      type: SEARCH_COUNTRY,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addActivity = (activity) => async (dispatch) => {
  try {
    const endpoint = "http://localhost:3001/activities";
    const response = await axios.post(endpoint, activity);
    const data = response.data;
    dispatch({ type: ADD_ACTIVITY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getActivities = () => async (dispatch) => {
  try {
    const endpoint = "http://localhost:3001/activities";
    const response = await axios.get(endpoint);
    const data = response.data;
    dispatch({ type: GET_ACTIVITIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};

export const filterByActivity = (activity) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  };
};

export const orderByName = (order) => {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
};

export const orderByPopulation = (order) => {
  return {
    type: ORDER_BY_POPULATION,
    payload: order,
  };
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const endpoint = "http://localhost:3001/register";
    const response = await axios.post(endpoint, userData);
    const data = response.data;
    dispatch({ type: REGISTER_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const endpoint = "http://localhost:3001/login";
    const response = await axios.post(endpoint, userData);
    const data = response.data;
    if (data.access) {
      dispatch({ type: LOGIN_USER });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
