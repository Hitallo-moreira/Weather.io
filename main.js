document.querySelector('.search-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const cityInput = document.querySelector('.search-city input');
    const city = cityInput.value;

    validateInput();

    function validateInput() {
        if (city === "") {
            alert("Campo de pesquisa vazio!");
        } 
    }

    searchCity(city);

    function searchCity(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const cityWeather = data.main.temp;
            const icon = data.weather[0].icon;
    
            showData(cityName, cityWeather, icon);
        })
        .catch(error => {
            alert('Não foi possível encontrar uma previsão para a cidade digitada', error);
        });
    }
    
    function showData(cityName, cityWeather, icon) {
        const cityDiv = document.querySelector('.city');
        const degreeDiv = document.querySelector('.degree');
        const iconDiv = document.querySelector('.icon');

        const celsiusTemperature = cityWeather - 273.15;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
        
        cityDiv.classList.add('show-city');
        cityDiv.textContent = `${cityName}`
        degreeDiv.textContent = `${Math.round(celsiusTemperature)}°C`
        iconDiv.setAttribute('src', iconUrl);
    }
})