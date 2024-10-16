function citiesOnly(arr) {
    return arr.map(city => city.city)
}

function upperCasingStates(arr) {
    return arr.map(state => state.split(' ').map(ucstate => ucstate.charAt(0).toUpperCase()+ucstate.slice(1)).join(' '))
}

function fahrenheitToCelsius(arr) {
    return arr.map(temp => Math.floor((parseInt(temp)-32)*(5/9)).toFixed(0)+'°C')
}
function trimTemp(arr) {
  return  arr.map(tem => ({
        ...tem,
        // console.log(tem.temperature);
        temperature : tem.temperature.replace(/\s*/g,''),
        // res.push(tem.city,tem.temperature)
        // res.push(tem.temperature)      
         }))
}
function tempForecasts(arr) {
    return arr.map(forecast => {
      return  `${(fahrenheitToCelsius([forecast.temperature]))}elsius in ${upperCasingStates([forecast.city])}, ${upperCasingStates([forecast.state])}`
       
    })
}

// let trimtemp = [
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
//   ]
//     -> [
//     { city: 'Los Angeles', temperature: '101°F' },
//     { city: 'San Francisco', temperature: '84°F' },
//   ]
// let citiesonly = [
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
//   ]
//   console.log(citiesOnly(citiesonly));
//   console.log(upperCasingStates(['alabama', 'new jersey']));

let tempforecast = [
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ] // -> ['38°Celsius in Pasadena, California']
let trimtemp= ([
    { city: 'Los Angeles', temperature: '  101 °F   ' }
    // { city: 'San Francisco', temperature: ' 84 ° F   ' },
  ]) /* -> [
    { city: 'Los Angeles', temperature: '101°F' },
    { city: 'San Francisco', temperature: '84°F' },
  ] */
  
   // -> ['Los Angeles', 'San Francisco']