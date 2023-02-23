export const getCountries = name => {
  const BASE_URL = 'https://restcountries.com/v2/name/';
  const PARAM = '?fields=name,capital,population,flags,languages';

  return fetch(`${BASE_URL}${name}${PARAM}`).then(response => {
    if (!response.ok) throw new Error();

    return response.json();
  });
};
