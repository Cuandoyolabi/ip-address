
const API_KEY = "at_uEtGTV9rwWx4mSjwrvfiExLvFSmrB";
const API = "https://geo.ipify.org/api/v2/country,city";

//const fullURL = `${API}?apikey=${API_KEY}&ipAddress=${Ip}`;

const URLCompletaPrueba = "https://geo.ipify.org/api/v2/country,city?apiKey=at_uEtGTV9rwWx4mSjwrvfiExLvFSmrB&ipAddress=8.8.8.8";


const fullPrueba = "https://geo.ipify.org/api/v2/country?apiKey=at_uEtGTV9rwWx4mSjwrvfiExLvFSmrB&ipAddress=8.8.8.8";

const id = document.getElementById("information-id");
const locationZone = document.getElementById("information-location");
const timeZone = document.getElementById("information-timezone");
const isp = document.getElementById("information-isp");
const buscador__id = document.getElementById("buscador__id");
const button__id = document.getElementById("buscador__btn__id");


button__id.addEventListener('click', () => {
    const ipUsuario = buscador__id.value.trim();

    buscarIP(ipUsuario)
})

async function buscarIP(Ip){
    
    //const fullURL = `${API}?apiKey=${API_KEY}&ipAddress=${Ip}`;
    const fullURL = `${API}?apiKey=${API_KEY}&ipAddress=${Ip}`;
    const solicitud = await fetch(fullURL)

    .then(response => response.json())
    .then(data => { 
        console.log(data)
        console.log(data.ip)
        id.textContent = data.ip;
        locationZone.textContent = data.location.region;
        timeZone.textContent = data.location.timezone;
        isp.textContent = data.isp;

        return {
            latitud: data.location.lat,
            longitud: data.location.lng
        };
    });
}

// El mapa recibira la latitud y la longitud que retorna la funciona buscarIP.
/* ---- Mapa --- */


/*let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
*/

let map = L.map('map').setView([latitud, longitud], 13);


L.tileLayer(`https://tile.openstreetmap.org/${latitud}/${longitud}/{13}.png`, {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);