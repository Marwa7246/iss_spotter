
const request = require('request-promise-native');

const fetchMyIp = function(){
  return request('https://api.ipify.org?format=json')     
}

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip
  return request(`https://ipvigilante.com/json/${ip}`);
}

const fetchISSFlyOverTimes = function(body) {
  const coods = JSON.parse(body).data;
  const lat = coods.latitude;
  const lon = coods.longitude;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}`
  return request(url);
}
const nextISSTimesForMyLocation = function() {
  return fetchMyIp()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes )
    .then(body => {
      const {response} = JSON.parse(body)
      return (response)
    })
}
  






module.exports = { 
  fetchMyIp, 
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
}