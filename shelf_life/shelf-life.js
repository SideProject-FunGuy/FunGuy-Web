const axios = require('axios');
const BASE_URL = `https://stilltasty.com`;


module.exports = {
  getCompatibility: (query) => axios({
    method:"POST",
    url : BASE_URL + `/searchitems/search`,
    headers: {
        "content-type":"application/x-www-form-urlencoded"
    },
    params: {
        q: query
    }
  })
}
