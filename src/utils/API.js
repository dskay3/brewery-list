import axios from 'axios';

export default {
  getBreweryList: function() {
    return axios.get('https://s3.amazonaws.com/bruvue-data/beer-data.json')
      .then(function(results) {
        return results;
      });
  }
}