function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "VENDOS_KETU_API_KEY_TENDE";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temp = data.main.temp;
        document.getElementById("result").innerHTML = `Temperatura në ${city} është ${temp}°C`;
  
        fetch("weather.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ qyteti: city, temperatura: temp })
        });
      })
      .catch(error => {
        document.getElementById("result").innerHTML = "Qyteti nuk u gjet!";
        console.error("Gabim:", error);
      });
  }
  
  