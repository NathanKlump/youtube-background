const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/playlistItems',
  params: {playlistId: 'PLeRj4b8xSv41Lv9dJ1I7Mk8RgQ3Kv1YC_', part: 'snippet', maxResults: '50'},
  headers: {
    'X-RapidAPI-Key': 'a82d08bb97msheba6e9257f802b0p163ca7jsn0392ca4ca0a3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const getSearchData = async () => {
  axios.request(options).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });
}