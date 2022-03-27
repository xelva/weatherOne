//get elements and store in variables

const input = document.querySelector('#city');
const submit = document.getElementById('button');
const destination = document.getElementById('destination');
const container = document.querySelector('.container');
const placeDivs = [document.getElementById("place1"), document.getElementById("place2"), document.getElementById("place3"), document.getElementById("place4"), document.getElementById("place5")];
const weatherDiv = document.getElementById("weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//export
export {input, submit, destination, container, placeDivs, weatherDiv, weekDays};



