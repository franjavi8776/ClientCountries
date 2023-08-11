const validation = (data) => {
  const correction = {};
  // Email
  if (!data.email) {
    correction.email = "El email no puede estar vacio";
  } else if (!/^\S+@\S+\.\S+/.test(data.email)) {
    correction.email = "El email no es valido";
  } else if (data.email.length > 35) {
    correction.email = "El email no puede tener mas de 35 caracteres";
  }
  // Password
  if (!/\d/.test(data.password)) {
    correction.password = "El password tiene que tener al menos un numero";
  } else if (data.password.length < 6 || data.password.length > 10) {
    correction.password =
      "El password no puede tener menos de 6 o mas de 10 caracteres";
  }
  return correction;
};

export default validation;
