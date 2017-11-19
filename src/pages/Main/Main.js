import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import BrewCard from '../../components/BrewCard';
import Load from '../../components/Load';
import Filter from '../../components/Filter';
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

    else if (event.target.value === 'Brewery') {
      this.sortBrewery(this.state.brews);
    }

    else if (event.target.value === 'ABV') {
      this.sortABV(this.state.brews);
    }

    else if (event.target.value === 'Beer Style') {
      this.sortStyle(this.state.brews);
    }

    else if (event.target.value === 'IBU') {
      this.sortIBU(this.state.brews);
    }
    
    else {
      this.getData();
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

  sortBrewery = data => {
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

  sortStyle= data => {
    data.sort(function(a, b) {
      // Added trims because data had some leading white spaces
      const styleA = a["Beer Style"].trim();
      const styleB = b["Beer Style"].trim();

      return (styleA < styleB) ? -1 : (styleA > styleB) ? 1 : 0;
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
      } else {
        abvA = parseFloat(a.ABV);
      }

      if (abvB.includes("%")) {
        abvB = parseFloat(b.ABV.slice(0, -1));
      } else {
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
        <Load />
      );
    }
    
    else {
      return (
        <div>
          <Filter 
            sort={this.sort}
            filter1="Beer Name"
            filter2="Beer Style"
            filter3="Brewery"
            filter4="ABV"
            filter5="IBU" />

          <Divider horizontal>Brew Results</Divider>

          <BrewCard 
            data={this.state.brews} />
        </div>
      );
    };
  };
};

export default Main;