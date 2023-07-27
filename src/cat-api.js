import { Report } from 'notiflix/build/notiflix-report-aio';
import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_mSgF2dZzulwDyx0bMv0cLnJQWegZHuonqVCFywHZsYw1IrLHCVSB6P5cqU2Napge';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';


function fetchBreeds() {
    return axios
    .get(`breeds/`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data;
    })
    .catch(() => {
        Report.failure("Oops!", "Something went wrong! Try reloading the page!");
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`/images/search?breed_ids=${breedId}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data[0];
    })
    .catch(() => {
        Report.failure("Oops!", "Something went wrong! Try reloading the page!");
    });
}
export { fetchBreeds, fetchCatByBreed };
