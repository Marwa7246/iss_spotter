const { fetchMyIp, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIp((error, ip) => {
  if (error) {
    console.log('It didn\'t work:' , error);
    return;
  }
  console.log('It worked! Returned IP:' ,ip);
  return;
});


fetchCoordsByIP('174.113.20.69', (error, coord) => {

  if (error) {
    console.log('It didn\'t work:' , error);
    return;
  }
  console.log('It worked! Returned coordonates:' ,coord);
  return;
  
});

const coords = { latitude: '42.95820', longitude: '-81.23800' };

fetchISSFlyOverTimes(coords, (error, data) => {

  if (error) {
    console.log('It didn\'t work:' , error);
    return;
  }
  console.log('It worked! Returned flyover times:' ,data);
  return;
  
});