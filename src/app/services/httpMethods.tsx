import axios from "axios";

const urlAPI = "http://localhost:8090/weather";

export const getWeather = async(location : string) => {
    return axios.get(`${urlAPI}/${location}`)
}