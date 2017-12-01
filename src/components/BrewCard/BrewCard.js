import React from 'react';
import { Card } from 'semantic-ui-react';
import './BrewCard.css';

const BrewCard = props => 
  <Card className="card" key={props.index} >
    <Card.Content>
      <Card.Header>
        Beer Name: <span className="beer-name">{props.data["Beer Name"]}</span>
      </Card.Header>

      <Card.Meta>
        Brewery: {props.data["Brewery Name"]}
      </Card.Meta>

      <Card.Description>
        <p><strong>Beer Style: </strong>{props.data["Beer Style"]}</p>
        <p><strong>ABV: </strong>{props.data.ABV}</p>
        <p><strong>IBU: </strong>{props.data.IBU}</p>
      </Card.Description>
    </Card.Content>
  </Card>;

export default BrewCard;