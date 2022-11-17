// import axios from 'axios';

var axios = require('axios');

var config = { method: 'get',
  url: 'https://api.1inch.io/v4.0/1/tokens',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data,"res is here"));
})

.catch(function (error) {
  console.log(error,"error is here");
});

