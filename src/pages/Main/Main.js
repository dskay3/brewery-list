import React, { Component } from 'react';
import BrewCard from '../../components/BrewCard';
import API from '../../utils/API';

class Main extends Component {
  state = {
    brewery: []
  };

  componentDidMount() {
    this.getData();
  };

  getData() {
    API.getBreweryList()
      .then(result => {
        this.setState({
          brewery: result.data
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    if (this.state.brewery.length === 0) {
      return (
        <p>NO DATA</p>
      );
    }
    
    else {
      return (
        <BrewCard 
          data={this.state.brewery} />
      );
    };
  };
};

export default Main;