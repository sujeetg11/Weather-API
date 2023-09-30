 const inputBox = document.querySelector('.input-box');
 const searchBtn = document.getElementById('searchBtn');
 const weather_img = document.querySelector('.weather-img');
 const temperature = document.querySelector('.temperature');
 const description = document.querySelector('.description');
 const wind_speed = document.getElementById('wind');
 const humidity = document.getElementById('humidity');
 const location_not_found = document.querySelector('.location-not-found')
 const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = 'a9abee87322b97c5b618730f8962b4df';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    if(weather_data.cod === `404`){
        location_not_found.style.display="flex";
        weather_body.style.display="none";
        console.log('error');
        return
    }

    location_not_found.style.display="none";
    weather_body.style.display="flex";

    temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds' :
            weather_img.src="assets/cloud.png";
            break;
        case 'Clear' :
            weather_img.src="assets/clear.png";
            break;
        case 'Rain' :
            weather_img.src="assets/rain.png";
            break;
        case 'Mist' :
            weather_img.src="assets/mist.png";
            break;                        
        case 'Snow' :
             weather_img.src="assets/snow.png";
             break;

    }   
}


inputBox.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        checkWeather(inputBox.value);
    }
  });

searchBtn.addEventListener('click', () =>{
    checkWeather(inputBox.value);
 })