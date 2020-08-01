const { fetchMyIp } =  require('./iss_promised');
const { fetchCoordsByIP } = require('./iss_promised')
const { fetchISSFlyOverTimes }  = require('./iss_promised')

fetchMyIp()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes )
  .then(body => {
    const {response} = JSON.parse(body)
    console.log(response)

    console.log(typeof response)
  })

