const DEBOUNCE_DELAY = 300;
import './css/styles.css';
import { getCountries } from './getCountries';
import { countriesMarkup } from './countriesMarkup.js';
import { countryMarkup } from './countriesMarkup.js';
import Notiflix from 'notiflix';
import Debounce from 'lodash.debounce';

const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const handleCountryInput = e => {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  const country = e.target.value.trim();
  if (country) {
    getCountries(country)
      .then(data => {
        if (data.length === 1) {
          countryMarkup(data);
        } else if (data.length > 1 && data.length <= 10) {
          countriesMarkup(data);
        } else {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        }
      })
      .catch(error =>
        Notiflix.Notify.failure('Oops, there is no country with that name')
      );
  }
};
countryInput.addEventListener(
  'input',
  Debounce(handleCountryInput, DEBOUNCE_DELAY)
);
