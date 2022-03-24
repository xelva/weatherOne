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
  
  const city = input.value;
  // Add AJAX functions here:
  const getPlaces = async () => {
    const urlToFetch = fourUrl + 'Portland' + '&limit=10';
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
  
  const getForecast = async () => {
    const urlToFetch = `${weatherUrl}?q=Portland&APPID=${weatherAPI}` 
    try {
        const response = await fetch(urlToFetch);
        if (response.ok){
            const jsonResponse = await response.json();
            return jsonResponse;
        }

    }
    catch(error){
        console.log(error);
    }
  };


  

  //add event listener to call function
  submit.addEventListener('click', () => {
      city = input.value;
    console.log(city);
  });

  
/*   // Render functions
  const renderPlaces = (places) => {
    placeDivs.forEach(($place, index) => {
      // Add your code here:
  
      const placeContent = '';
      $place.append(placeContent);
    });
    destination.append(`<h2>${places[0].location.locality}</h2>`);
  };
  
  const renderForecast = (forecast) => {
    const weatherContent = '';
    weatherDiv.append(weatherContent);
  };
  
  const executeSearch = () => {
    placeDivs.forEach(place => place.empty());
    weatherDiv.empty();
    destination.empty();
    container.css("visibility", "visible");
    getPlaces();
    getForecast();
    return false;
  }
  
  submit.click(executeSearch);


   */
  