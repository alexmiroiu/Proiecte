
class ApiUrl {
    units = 'metric';

    constructor(apiKey) {
        this.key = apiKey;
    }

    switchUnits () {
        this.units = 'imperial';
    }
    createUrl(city) {
        return `https://api.openweathermap.org/data/2.5/find?q=${city}&units=${this.units}&appid=${this.key}`
    }
}

let render = {
    cityName: document.querySelector('.name span:first-child'),
    countryCode: document.querySelector('.name span:last-child'),
    temperature: document.querySelector('.temperature span'),
    description: document.querySelector('.description'),
    feelsLike: document.querySelector('#feels-like-temp'),
    humidity: document.querySelector('.humidity span'),
    img: document.querySelector('.icon img'),
    iconCode: '',
    setData: function(data) {
        this.cityName.textContent = data.name;
        this.countryCode.textContent = data.sys.country;
        this.temperature.textContent = Math.round(data.main.temp);
        this.description.textContent = (data.weather[0].description).toUpperCase();
        this.feelsLike.textContent = Math.round(data.main.feels_like);
        this.humidity.textContent = Math.round(data.main.humidity) + '%';
        this.iconCode = data.weather[0].icon;
    },
    imgUrl: function(code) {
        let link = `http://openweathermap.org/img/wn/${code}@2x.png`;
        this.img.src = link;
    }
}


const url = new ApiUrl('e7d0f0d9935115ad293d3c28b1ab0643');
const weatherBox = document.querySelector('.container');

// window.addEventListener('load', () => {
//     weatherBox.style.display = 'none';
// })

const srcBtn = document.querySelector('button');
srcBtn.addEventListener('click', () => {
    let cityName = document.querySelector('#search-bar').value;
    let link = url.createUrl(cityName);
    fetch(link).then(response => response.json()).then(data => {
        let weatherData = data.list[0];
        render.setData(weatherData);
        render.imgUrl(render.iconCode);
        weatherBox.style.visibility = 'visible';

    })
})


