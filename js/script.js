
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


let map;
let marker;

async function buscarIP(Ip){
    
    const fullURL = `${API}?apiKey=${API_KEY}&ipAddress=${Ip}`;
    const response = await fetch(fullURL);
    const data = await response.json();

    console.log(data);
    id.textContent = data.ip;
    locationZone.textContent = data.location.region;
    timeZone.textContent = data.location.timezone;
    isp.textContent = data.isp;

    return {
        latitud: data.location.lat,
        longitud: data.location.lng
    };
}


button__id.addEventListener('click', async () => {
    const ipUsuario = buscador__id.value.trim();

    if(!ipUsuario) return alert("Escribe una Ip Valida");

    const coordenadas = await buscarIP(ipUsuario);
    console.log(coordenadas)
    if(!map){
        map = L.map('map').setView([coordenadas.latitud, coordenadas.longitud], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        marker = L.marker([coordenadas.latitud, coordenadas.longitud]).addTo(map);
    } else {
        // Si ya existe, solo actualizamos posición
        map.setView([coordenadas.latitud, coordenadas.longitud], 13);
        marker.setLatLng([coordenadas.latitud, coordenadas.longitud]);
    }
});

window.addEventListener('DOMContentLoaded', async () => {
    // Obtener la IP pública del usuario
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const ipUsuario = ipData.ip;

    const coordenadas = await buscarIP(ipUsuario);

    map = L.map('map').setView([coordenadas.latitud, coordenadas.longitud], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    marker = L.marker([coordenadas.latitud, coordenadas.longitud]).addTo(map);
});



