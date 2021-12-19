let countries;
const countriesList = document.getElementById("countries");

await fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then((data) => initialize(data))
    .catch(err => console.log('Error: ', err));

countriesList.addEventListener("change", newCountrySelection/*event => /!*displayCountry(event.target.value)*!/console.log(event.target)*/);

function newCountrySelection(event) {
    const arg = event.target.value;
    //console.log(arg)
    displayCountry(arg);
}

function displayCountry(name) {
    //console.log(countries)
    const countryData = countries.find(country => country.name.common === name);
    //console.log(countryData);
    document.getElementById("capital").innerHTML = countryData.capital[0];
    document.getElementById("population").innerHTML = countryData.population.toLocaleString();
    const currency = Object.keys(countryData.currencies)[0]
    document.getElementById("currencies").innerHTML = currency;
    document.getElementById("region").innerHTML = countryData.region;
    document.getElementById("subregion").innerHTML = countryData.subregion;
    document.querySelector("#flag-container img").src = countryData.flags.png;
}

function initialize(countriesData) {
    countries = countriesData;
    let options = '';
    countries.forEach(country => options += `<option value="${country.name['common']}">${country.name['common']}</option>`);
    countriesList.innerHTML = options;
    displayCountry('MLT')
}


