import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  const [city, setCity] = React.useState('');
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`https://api.codetabs.com/v1/weather?city=${city}`);
        let result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  const handleCityChange = () => {
    let newCity = prompt("What city do you want to check the weather for?");
    if (newCity) {
      localStorage.city = newCity;
      setCity(newCity);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleCityChange}>set City</button>
        <p>temperature fahrenheit: {!data ? "Loading..." : data.tempF}</p>
        <br></br>
        <p>temperature celsius: {!data ? "Loading..." : data.tempC}</p>
      </header>
    </div>
  );
}

export default App;
