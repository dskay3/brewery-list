import axios from 'axios';

export default {
  getBrewsList: function() {
    return axios.get('https://s3.amazonaws.com/bruvue-data/beer-data.json')
      .then(function(results) {
        return results;
      });
  }
}