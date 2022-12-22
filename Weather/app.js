//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi={
    key: "7e0ee9ae3b62e488a07045877898f595",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

// Event Listener function on keypress
searchInputBox.addEventListener('keypress', (event) =>{
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
});

// Get Weather Report
function getWeatherReport (city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city=document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('Images/cloudy.jpg')";
    }

    else if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('Images/clear.jpg')";
    }

    else if(weatherType.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage = "url('Images/thunderstorm.jpg')";
    }

    else if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage = "url('Images/snow.jpg')";
    }

    else if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = "url('Images/haze.jpg')";
    }

    else if(weatherType.textContent == 'Smoke'){
        document.body.style.backgroundImage = "url('Images/smoke.jpg')";
    }

    else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('Images/rain.jpg')";
    }

    else if(weatherType.textContent == 'Fog'){
        document.body.style.backgroundImage = "url('Images/fog.jpg')";
    }

    else if(weatherType.textContent == 'Mist'){
        document.body.style.backgroundImage = "url('Images/mist.jpg')";
    }

    else if(weatherType.textContent == 'Sunny'){
        document.body.style.backgroundImage = "url('Images/sunny.jpg')";
    }

    else{
        document.body.style.backgroundImage = "url('Images/bg.jpg')";
    }
}

// Date manage
function dateManage(dateArg){

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}