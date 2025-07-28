
const API_KEY = "at_uEtGTV9rwWx4mSjwrvfiExLvFSmrB";
const API = "https://geo.ipify.org/api/v2/country";

//const fullURL = `${API}?apikey=${API_KEY}&ipAddress=${Ip}`;

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

function buscarIP(Ip){
    
    //const fullURL = `${API}?apiKey=${API_KEY}&ipAddress=${Ip}`;
    const fullURL = `${API}?apiKey=${API_KEY}&ipAddress=${Ip}`;

    const solicitud = fetch(fullURL)
    .then(response => response.json())
    .then(data => { 
        console.log(data)
        console.log(data.ip)
        id.textContent = data.ip;
        locationZone.textContent = data.location.region;
        timeZone.textContent = data.location.timezone;
        isp.textContent = data.isp;
    })

}



/* ---- Mapa --- */


let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);