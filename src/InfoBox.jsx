import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import "./InfoBox.css";
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';

export default function InfoBox({ info }) {
    // const INIT_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1604949210966-9440c324823f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">
            {info ? (
                <div className='cardContainer'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                            title="Weather Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city} {info.humidity > 80 ? <ThunderstormSharpIcon /> : info.temp > 15 ? <WbSunnySharpIcon /> : <AcUnitSharpIcon />}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="span">
                                <p>Temperature: {info.temp}&deg;C</p>
                                <p>Humidity: {info.humidity}%</p>
                                <p>Pressure: {info.pressure} hPa</p>
                                <p>Min Temp: {info.temp_min}&deg;C</p>
                                <p>Max Temp: {info.temp_max}&deg;C</p>
                                <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            ) : (
                <Typography variant="h6" color="text.secondary">
                    No information available. Please search for a city to see the weather details.
                </Typography>
            )}
        </div>
    );
}

InfoBox.propTypes = {
    info: PropTypes.shape({
        city: PropTypes.string.isRequired,
        feels_like: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        pressure: PropTypes.number.isRequired,
        temp: PropTypes.number.isRequired,
        temp_max: PropTypes.number.isRequired,
        temp_min: PropTypes.number.isRequired,
        weather: PropTypes.string.isRequired,
    }),
};
