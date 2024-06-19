import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feels_like: 38.99,
        humidity: 74,
        pressure: 1009,
        temp: 31.99,
        temp_max: 31.99,
        temp_min: 31.94,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
