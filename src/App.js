import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://api.codetabs.com/v1/weather?city=seattle")
      .then((res) => res.json())
      .then((data) => setData(data));
      console.log(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>temperature fahrenheit: {!data ? "Loading..." : data.tempF}</p>
        <br></br>
        <p>temperature celsius: {!data ? "Loading..." : data.tempC}</p>
      </header>
    </div>
  );
}

export default App;