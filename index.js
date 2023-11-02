






function getDetails() {

    let cityName = document.getElementById('city-input').value;
    console.log(cityName);
    let A_pi = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3d717b4b1fa0dc4b07a7a91a7513b569&units=metric`);
    A_pi.then((es) => es.json())
        .then((res) => displayDetails(res))
        .catch((err)=>alert('Invaild city name'));

}


function displayDetails(weatherDetails) {
    let element = document.getElementsByClassName('contentPart')[0];
    if (element) {
        element.style.display = "inline";
    }
    console.log(weatherDetails);
    let temp = document.getElementById('temp');
    let city = document.getElementById('city');
    let humidity = document.getElementById('humidity');
    let wind = document.getElementById('wind');
    let weathercnd = document.getElementById('weathercnd')
    // console.log(weatherDetails.main.temp);
    temp.innerHTML = weatherDetails.main.temp + '°C';
    city.innerHTML = weatherDetails.name;
    humidity.innerHTML = weatherDetails.main.humidity + '%';
    wind.innerHTML = weatherDetails.wind.speed + 'km/h';
    console.log(weatherDetails.weather[0].main);

    if (weatherDetails.weather[0].main === 'Clouds') {
        weathercnd.src = './images/clouds.png'
    }
    else if (weatherDetails.weather[0].main === 'Clear') {
        weathercnd.src = './images/clear.png'
    }
    else if (weatherDetails.weather[0].main === 'Rain') {
        weathercnd.src = './images/rain.png'
    }
    else if (weatherDetails.weather[0].main === 'Drizzle') {
        weathercnd.src = './images/drizzle.png'
    }
    else if (weatherDetails.weather[0].main === 'Mist') {
        weathercnd.src = './images/mist.png'
    }
}