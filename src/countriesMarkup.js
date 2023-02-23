const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export const countriesMarkup = countries => {
  countryInfo.innerHTML = '';
  const markup = countries
    .map(({ name, flags }) => {
      return `<li class="item__decreased"><span class="flag" style="background-image: url('${flags.svg}')"></span>${name}</li>`;
    })
    .join('');
  countryList.innerHTML = markup;
};

export const countryMarkup = country => {
  const { name, capital, population, flags, languages } = country[0];
  const lang = languages.map(lang => lang.name).join(', ');
  const listItemMarkup = `<li class="item"><span class="flag" style="background-image: url('${flags.svg}')"></span>${name}</li>`;
  const markup = `<p><span class="title">Capital: </span>${capital}</p>
    <p><span class="title">Population: </span>${population}</p>
    <p><span class="title">Languages: </span>${lang}</p>`;
  countryList.innerHTML = listItemMarkup;
  countryInfo.innerHTML = markup;
};
