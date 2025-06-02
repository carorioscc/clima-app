import { ajax } from "../tools/ajax";


export const  getPlaces = async (countryCode, cityCode) =>{
  const optionsRequest = {
    method: 'GET',
    url: 'https://country-state-city-search-rest-api.p.rapidapi.com/cities-by-countrycode-and-statecode',
    headers: {
        'x-rapidapi-key': '05cb4c1890msh37b442b38860208p1fa49cjsnb73929ada6ca',
        'x-rapidapi-host': 'country-state-city-search-rest-api.p.rapidapi.com'
    },
    params :{
      countrycode: countryCode ?? 'MX',
      statecode : cityCode ?? 'CDMX'
    }
  };
  return await ajax(optionsRequest);
}
