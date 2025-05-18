fetch('https://api.openweathermap.org/data/2.5/weather?q=Brussels&appid=jouw-api-key')
      .then(response => response.json())
      .then(weerData => {
        console.log(`Het is momenteel ${weerData.main.temp}°C in ${weerData.name}`);
        console.log(`Weersomschrijving: ${weerData.weather[0].description}`);
    });
    