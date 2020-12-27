const axios = require('axios');
const BASE_URL = `https://shelf-life-api.herokuapp.com`;


// module.exports = {
//   getCompatibility: (query) => axios({
//     method:"GET",
//     url : BASE_URL + `/search`,
//     headers: {
//         "content-type":"application/x-www-form-urlencoded"
//     },
//     params: {
//         q: query
//     }
//   })
// }

module.exports = {
  getCompatibility: (query) => axios({
    method:"GET",
    url : BASE_URL + `/guides/${query}`,
    headers: {
        "content-type":"application/x-www-form-urlencoded"
    }
  })
}
