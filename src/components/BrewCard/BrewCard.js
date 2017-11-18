import React from 'react';
import { Card } from 'semantic-ui-react';
import './BrewCard.css';

const BrewCard = props => 
  <Card.Group>
    {props.data.map((result, index) => 
      <Card className="card" key={index}>
        <Card.Content>
          <Card.Header>
            {result["Beer Name"]}
          </Card.Header>

          <Card.Meta>
            {result["Brewery Name"]}
          </Card.Meta>

          <Card.Description>
            <p>Beer Style: {result["Beer Style"]}</p>
            <p>ABV: {result.ABV}</p>
            <p>IBU: {result.IBU}</p>
          </Card.Description>

        </Card.Content>
      </Card>
    )}
  </Card.Group>;

export default BrewCard;