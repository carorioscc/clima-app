import {useEffect, useState} from 'react';
//import { ajax } from './tools/ajax';
import { getCountries} from './services/countries'
import { getCities } from "./services/cities";
import { getPlaces } from "./services/places";
import { getPlaceWeather } from './services/weather';


const App = () =>{
//function App() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const [places, setPlaces] = useState([]);

  const [weather, setWeather] = useState(null);
  //efecto secundario
  useEffect(() => {
    
    (async ()=>{
      setCountries (await getCountries ());
      console.log(setCountries)
      
    })();
  }, []);
  console.log(countries)
  const countryHandler = async e => {
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
    setWeather(null);
  }
  /*
  const countryHandler = async e =>{
    const countryCode= e.currentTarget.value;
    //const temp = await getCities(countryCode);
    setCities(await getCities(countryCode))
  }
  */
  const cityHandler = async e => {
    e.currentTarget.value && setPlaces (await getPlaces('MX',e.currentTarget.value));
    setWeather(null);
  }
  /*
  const cityHandler = async e =>{
    const cityCode = e.currentTarget.value;
    const country = "MX";
    //console.log(`ciudad : ${cityCode}`);
    setPlaces(await getPlaces(country, cityCode))
  }*/
  //

  const placeHandler = async e =>  e.currentTarget.value && setWeather (await getPlaceWeather(e.currentTarget.value));
  console.log(weather);
  
  return (
    //fragment sin div
    <>
      <div>
        <label>Selecciona un Pais: </label>
          <select onChange={countryHandler}>
          <option>Selecciona.</option>
          {countries.map(country => <option key={country.cca2} value={country.cca2}>{country.name.common}</option>)}
          </select>
      </div>
      {cities.length > 0  && (
      <div>
        <label>Elige un Estado</label>
        <select onChange={cityHandler}>
        <option>Selecciona.</option>
          {cities.map(city => <option key={city.isoCode} value={city.isoCode}>{city.name}</option>)}
          </select>
      </div>
      )
      }

      {places.length > 0 && (
      <div>
        <label>Elige una Ciudad</label>
        <select onChange={placeHandler}>
          <option>Selecciona.</option>
          {places.map(place => <option key={place.name} value={place.name}>{place.name}</option>)}
        </select>
      </div>
      )
      }
      <hr />
      {weather && (
        <div>

          <h3>Clima:{weather.main.temp} °</h3>
          <p>Min: {weather.main.temp_min} °</p>
          <p>Max: {weather.main.temp_max} °</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
          {JSON.stringify(weather, null, 2)}
        </div>
      )}
    </>
  )
}

export default App