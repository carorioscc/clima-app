import { ajax } from "../tools/ajax";

export const getPlaceWeather = async place => {
    const optionsRequest = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params : {
            q: place,
            appid: "b328a225f0bba62757bc4326ece5167f",
            units: "metric"//grados centigrados
        }
    };
    return await ajax(optionsRequest);
}