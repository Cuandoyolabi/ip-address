
const API_KEY = "at_uEtGTV9rwWx4mSjwrvfiExLvFSmrB";
const API = "https://geo.ipify.org/api/v2/country";
const fullURL = `${API}?apikey=${API_KEY}&ipAddress=8.8.8.8`;

const fullPrueba = "https://geo.ipify.org/api/v2/country?apiKey=at_uEtGTV9rwWx4mSjwrvfiExLvFSmrB&ipAddress=8.8.8.8";

const id = document.getElementById("information-id");
const locationZone = document.getElementById("information-location");
const timeZone = document.getElementById("information-timezone");
const isp = document.getElementById("information-isp");


const solicitud = fetch(fullPrueba)
    .then(response => response.json())
    .then(data => { 
        console.log(data)
        console.log(data.ip)
        id.textContent = data.ip;
        locationZone.textContent = data.location.region;
        timeZone.textContent = data.location.timezone;
        isp.textContent = data.isp;
    })

    


