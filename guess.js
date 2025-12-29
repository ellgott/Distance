 import { cities } from "./Locations/locs_clean.js"; // Retrieving my data
 import { haversine } from "./search.js";

const input = document.getElementById('city_1');
const datalist = document.getElementById('city_list');

// Getting keys
const city_names = Object.keys(cities);

// Fill datalist
city_names.forEach(city => {
  const option = document.createElement('option');
  //option.value = `${city}, ${cities[city].country}`;
  option.value = city
  datalist.appendChild(option);
});

// Follow the writing...
input.addEventListener('change', () => {
  if (!city_names.includes(input.value)) {
    input.value = '';
  }
});

function randomCity() {
    const keys = Object.keys(cities)
    const index = Math.floor(Math.random()*keys.length)
    return cities[keys[index]]
}

function closestCity(city_1, option_1, option_2) { 
    const dis_1 = haversine(cities[city_1], cities[option_1])
    const dis_2 = haversine(cities[city_1], cities[option_2])
    if (dis_1 > dis_2) {return dis_2}
    else {return dis_1}
}

document.getElementById("Start").addEventListener("submit", function(event) {
    event.preventDefault();
    const startpoint = document.getElementById("city_1").value
    const source = cities[startpoint]

    document.getElementById("start_information").textContent = 
        `Starting from ${startpoint}, ${source.country}, which of the following is closest?`; // changes content of paragraph result

    const Options = document.getElementById("Options");
    Options.classList.remove("hidden"); // Materialize the answer panel, remove the hidden


    let option_1 = randomCity()
    while (option_1 == startpoint) {
        option_1 = randomCity()
    }
    console.log(`Option 1 is ${option_1}`)

    let option_2 = randomCity()
    while (option_2 == startpoint || option_2 == option_1) {
        option_2 = randomCity()
    }
    console.log(`Option 1 is ${option_1}`)
    document.getElementById("option_1").textContent = `${option_1}, ${cities[option_1].country}`
    console.log(`Option 2 is ${option_2}`)
    document.getElementById("option_2").textContent = `${option_2}, ${cities[option_2].country}`

    let correct = closestCity(startpoint,option_1, option_2)
});

