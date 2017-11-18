import React, { Component } from 'react';
import BrewCard from '../../components/BrewCard';
import API from '../../utils/API';

class Main extends Component {
  state = {
    brews: []
  };

  componentDidMount() {
    this.getData();
  };

  getData() {
    API.getBrewsList()
      .then(result => {
        this.setState({
          brews: result.data
        });
      })
      .catch(error => console.log(error));
  };

  sort = event => {
    if (event.target.value === 'Beer Name') {
      this.sortBeerName(this.state.brews);
    }

    else if (event.target.value === 'Beer Company') {
      this.sortBeerCompany(this.state.brews);
    }

    else if (event.target.value === 'ABV') {
      this.sortABV(this.state.brews);
    }

    else {
      this.sortIBU(this.state.brews);
    };
  };

  sortBeerName = data => {
    data.sort(function(a, b) {
      // Added trims because data had some leading white spaces
      const beerA = a["Beer Name"].trim();
      const beerB = b["Beer Name"].trim();

      return (beerA < beerB) ? -1 : (beerA > beerB) ? 1 : 0;
    });

    this.setState({
      brews: data
    });
  }

  sortBeerCompany = data => {
    data.sort(function(a, b) {
      // Added trims because data had some leading white spaces
      const companyA = a["Brewery Name"].trim();
      const companyB = b["Brewery Name"].trim();

      return (companyA < companyB) ? -1 : (companyA > companyB) ? 1 : 0;
    });

    this.setState({
      brews: data
    });
  }

  sortABV = data => {
    data.sort(function(a, b) {
      let abvA = a.ABV;
      let abvB = b.ABV;

      if (abvA.includes("%")) {
        abvA = parseFloat(a.ABV.slice(0, -1));
      }

      if (abvB.includes("%")) {
        abvB = parseFloat(b.ABV.slice(0, -1));
      }

      else {
        abvA = parseFloat(a.ABV);
        abvB = parseFloat(b.ABV);
      }

      return abvA - abvB;
    });

    this.setState({
      brews: data
    });
  }

  sortIBU = data => {
    data.sort(function(a, b) {
      let ibuA = a.IBU;
      let ibuB = b.IBU;

      if (ibuA === "NA" || ibuA === "/OG") {
        ibuA = 0.0;
      } else {
        if (ibuA.includes("/OG")) {
          ibuA = parseFloat(a.IBU.slice(0, a.IBU.indexOf("/")));
        } else {
          ibuA = parseFloat(a.IBU);
        }
      }

      if (ibuB === "NA" || ibuA === "/OG") {
        ibuB = 0.0;
      } else {
        if (ibuB.includes("/OG")) {
          ibuB = parseFloat(b.IBU.slice(0, b.IBU.indexOf("/")));
        } else {
          ibuB = parseFloat(b.IBU);
        }
      }

      return ibuA - ibuB;
    });

    this.setState({
      brews: data
    });
  }

  render() {
    if (this.state.brews.length === 0) {
      return (
        <p>NO DATA</p>
      );
    }
    
    else {
      return (
        <div>
          <select className="" onChange={this.sort}>
            <option>---</option>
            <option>Beer Name</option>
            <option>Beer Company</option>
            <option>ABV</option>
            <option>IBU</option>
          </select>

          <BrewCard 
            data={this.state.brews} />
        </div>
      );
    };
  };
};

export default Main;