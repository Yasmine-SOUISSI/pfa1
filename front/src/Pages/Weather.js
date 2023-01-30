import React from "react";
import { useState } from "react";
import weather from "./weather.jpg";
import sunny from "./sunny.jpg";
import cold from "./cold.jpg";

export function Weather() {
  const apikey = "3289d7d2fa11b840bb832660a1c782a7";
  const [weatherdata, setweatherdata] = useState([{}]);
  const [city, setcity] = useState("");
  const getweather = (event) => {
    if (event.key == "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apikey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setweatherdata(data);
          console.log("got weather" + data);
        });
    }
  };

  return (
    <body>
      <div className='bhome2'>
       

        <input
          placeholder='entrer le pays'
          onChange={(e) => setcity(e.target.value)}
          value={city}
          onKeyPress={getweather}
          className='cityclass'
        />

        {typeof weatherdata.main === "undefined" ? (
          <div>
            <img src={weather} height='500px' width='1300px' />
          </div>
        ) : (
          <div>
            {(weatherdata.main.temp - 32) / 1.8 >= 20 ? (
              <div className=''>
                <img src={sunny} height='518px' width='1300px' />
                <div className='weather'>
                  {" "}
                  <p>{weatherdata.name}</p>
                  <p>{Math.round((weatherdata.main.temp - 32) / 1.8)}°C</p>
                  <p>
                    ressenti :{" "}
                    {Math.round((weatherdata.main.feels_like - 32) / 1.8)}°C
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <img src={cold} height='518px' width='1300px' />
                <div className='weather'>
                  <p>{weatherdata.name}</p>
                  <p>{Math.round((weatherdata.main.temp - 32) / 1.8)}°C</p>
                  <p>
                    ressenti :{" "}
                    {Math.round((weatherdata.main.feels_like - 32) / 1.8)}°C
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </body>
  );
}
