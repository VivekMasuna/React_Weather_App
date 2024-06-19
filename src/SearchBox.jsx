import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    console.log("API_URL:", API_URL);
    console.log("API_KEY:", API_KEY);

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            let jsonResponse = await response.json();
            let result = {
                city: city,
                feels_like: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                temp: jsonResponse.main.temp,
                temp_max: jsonResponse.main.temp_max,
                temp_min: jsonResponse.main.temp_min,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            setError(err.message);
            console.error("Error fetching weather data:", err);
            return null;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setError(null);
        setCity("");
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
        }
    };

    return (
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
                <TextField required id="city" label="City Name" value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

SearchBox.propTypes = {
    updateInfo: PropTypes.func.isRequired,
};
