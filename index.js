const { fetchMyIp, fetchCoordsByIP } = require('./iss');

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
