let countries;
const countriesList = document.getElementById("countries");

const countrySearch = document.getElementById("countrySearch");
const searchButton = document.getElementById("searchButton")

await fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then((data) => initialize(data))
    .catch(err => console.log('Error: ', err));

countriesList.addEventListener("change", newCountrySelection/*event => /!*displayCountry(event.target.value)*!/console.log(event.target)*/);
console.log(searchButton);
searchButton.addEventListener("click", newCountrySearchBtn) //Searching with btn
countrySearch.addEventListener("keyup", newCountrySearch) //searching with only writing

function newCountrySelection(event) {
    const arg = event.target.value;
    //console.log(arg)
    displayCountry(arg);
}

function newCountrySearchBtn() {
    const country = countries.find((country) => country.name.common === countrySearch.value);
    displayCountry(country.name.common)
}

function newCountrySearch(event) {
    const arg = event.target.value;
    if (countrySearch.value === arg)
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


