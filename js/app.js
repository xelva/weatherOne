//import API keys
import {fourAPI, weatherAPI, fourUrl, weatherUrl} from './api.js';

//import dom identifiers 
import {input, submit, destination, container, placeDivs, weatherDiv, weekDays} from './dom.js';

//import basic dom functions from domFx
import {createPlaceHTML, createWeatherHTML, kelvinToFahrenheit} from './domFx.js';

//API call setup

const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: fourAPI
    }
  };
  

  // Add AJAX functions here:
  const getPlaces = async (city) => {
    const urlToFetch = fourUrl + city + '&categories=11046' + '&limit=5';
    try {
        const response = await fetch(urlToFetch, options);
        if (response.ok){
            const jsonResponse = await response.json();
            const places = jsonResponse.results;
            return places;
        }
    }
    catch(error) {
        console.log(error);
    }
  };
  
  const getForecast = async (city) => {
    const urlToFetch = `${weatherUrl}?q=${city}&APPID=${weatherAPI}` 
    try {
        const response = await fetch(urlToFetch);
        if (response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;
        }
    }
    catch(error){
        console.log(error);
    }
  };


  
   // Render functions
  const renderPlaces = (places) => {
    placeDivs.forEach((placeHold, index) => {
      // Add your code here:
      const place = places[index];
      const placeIcon = place.categories[0].icon;
      const placeImgSrc = placeIcon.prefix + 'bg_64' + placeIcon.suffix;
      const placeContent = createPlaceHTML(place.name, place.location, placeImgSrc);
      placeHold.innerHTML = placeContent;
    });
    destination.innerHTML = `<h2>${places[0].location.locality}</h2>`;
  };
  
  const renderForecast = (forecast) => {
    const weatherContent = createWeatherHTML(forecast);;
    weatherDiv.innerHTML = weatherContent;
  };
 
  
  const executeSearch = () => {
    placeDivs.forEach(place => place = '');
    weatherDiv.innerHTML = '';
    destination.innerHTML = '';
    container.style.display = 'visible';
    let city = input.value;
    getPlaces(city).then(places => {renderPlaces(places)});
    getForecast(city).then(forecast => {renderForecast(forecast)});
    return false;
  }


  
  submit.addEventListener('click', () => {
      executeSearch();
  })

