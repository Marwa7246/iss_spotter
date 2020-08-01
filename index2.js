// const { fetchMyIp } =  require('./iss_promised');

const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index');


nextISSTimesForMyLocation()
  .then(response => {
    printPassTimes(response);
  });

