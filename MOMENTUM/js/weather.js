const API_KEY = "e0a402b25bc393b281d4204e25a399c4"; 

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => { //내용 추출 후 데이터 얻기
        const weather = document.querySelector("#weather span:first-child");
        const city  = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
        city.innerText = data.name;ß

    });  
}

function onGeoError() {
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)