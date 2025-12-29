import { cities } from "./Locations/locs_clean.js"; // Retrieving my data

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

function search(city) {
    return cities[city]; // Collecting data from dic
}

export function rescale(coordinate) { // Rescale coordinates
    let coord;

    if (coordinate.includes("S") || coordinate.includes("W")) {
        coord = - parseFloat(coordinate.slice(0,-1))
        console.log(`${coordinate} turns negative`)
    }
    else {
        coord = parseFloat(coordinate.slice(0,-1))
        console.log(`${coordinate} turns positive`)
    }
    return coord
}


export function haversine(source, target) { // Calculating distance with haversine
    const to_radians = (degrees) => degrees *Math.PI / 180 // Converting to radians

    const s_lat = to_radians(rescale(source.lat))
    const s_lon = to_radians(rescale(source.lon))
    const t_lat = to_radians(rescale(target.lat))
    const t_lon = to_radians(rescale(target.lon))


    const d_lat = t_lat - s_lat
    const d_lon = t_lon - s_lon

    const a = Math.sin(d_lat/2)**2 + Math.cos(s_lat) * Math.cos(t_lat) * Math.sin(d_lon/2)**2
    const c = 2*Math.asin(Math.sqrt(a))
    const r = 6371
    const distance = c*r
    return distance.toFixed(2)

}

document.getElementById("search_bar").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents reloading

        const result = document.getElementById("result");
        result.classList.remove("hidden"); // Materialize the answer panel, remove the hidden

        const city_s = document.getElementById("city_1").value; // assigns search input variable name
        const city_t = document.getElementById("city_2").value; // second city

        const source = cities[city_s] // Fetching dictionary information

        const target = cities[city_t] // -::-

        const distance = haversine(source,target)
        const part_max = ((distance / (Math.PI*6371))*100).toFixed(2)
            
        document.getElementById("search_request").textContent = 
        `Distance from ${city_s}, ${source.country} to ${city_t}, ${target.country}`; // changes content of paragraph result

        document.getElementById("search_result").textContent = 
        `Closest distance is ${distance} kilometres, which is ${part_max}% of furthest possible distance.`;

    }) 