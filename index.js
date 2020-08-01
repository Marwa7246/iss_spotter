//const { fetchMyIp, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work:' , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' ,ip);
//   return;
// });


// fetchCoordsByIP('174.113.20.69', (error, coord) => {

//   if (error) {
//     console.log('It didn\'t work:' , error);
//     return;
//   }
//   console.log('It worked! Returned coordonates:' ,coord);
//   return;
  
// });

// const coords = { latitude: '42.95820', longitude: '-81.23800' };

// fetchISSFlyOverTimes(coords, (error, data) => {

//   if (error) {
//     console.log('It didn\'t work:' , error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:' ,data);
//   return;
  
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);

  }
};



if (require.main === module) {
  //to be sure that this part is not excuted if the file is exported
  //and required in another file (like require printPassTimes in index2)
  nextISSTimesForMyLocation((error, passTimes) => {
    if (error) {
      return console.log("It didn't work!", error);
    }
    // success, print out the deets!
    printPassTimes(passTimes);
  });
}



module.exports = { printPassTimes };