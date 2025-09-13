"use client"
import { Box, Button, TextField, Typography } from "@mui/material";
import WeatherTable from "./components/WeatherTable";
import { useEffect, useState } from "react";
import { getWeather } from "./services/httpMethods";


export interface WeatherApiResponseType{
    currentAnswer: string;
    location: string;
}

export interface WeatherData {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype: null | string | string[];
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  conditions: string;
  icon: string;
  stations: string[];
  source: string;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
}

export default function Home() {
  const [inputState,setInputState] = useState<string>('');
  const [currentWeatherState,setCurrentWeatherState] = useState<WeatherData>();
  const fetch = async(inputLocation:string) =>{
        const WeatherApiResponse = await getWeather(inputLocation)
        console.log(WeatherApiResponse)
        setCurrentWeatherState(JSON.parse(WeatherApiResponse.data.currentWeather));
    }

  console.log(inputState)
  return (
    <Box style={{textAlign:"center"}}>
      <div className="container">
        <Typography style={{color:"white"}} variant="h1" >Consult Current Weather</Typography>
        <Typography  style={{color:"white"}} variant="body1">Type a location around the world to look up the current weather </Typography>
        <TextField 
          value={inputState} 
          onChange={({target}) => setInputState(target.value)} 
          id="outlined-basic" label="Search weather of a location" 
          variant="outlined" 
          />
      </div>
        <Button 
          variant="contained"
          sx={{marginTop:"5vh", marginBottom:"5vh"}}
          onClick={()=>fetch(inputState)}
        >
          Search
          </Button>
        <WeatherTable data={currentWeatherState} style={{justifySelf:"center"}} />

    </Box>
  );
}
