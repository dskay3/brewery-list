import React from 'react';
import { Card } from 'semantic-ui-react';
import './BrewCard.css';

const BrewCard = props => 
  <Card.Group>
    {props.data.map((result, index) => 
      <Card className="card" key={index}>
        <Card.Content>
          <Card.Header>
            Beer Name: <span className="beer-name">{result["Beer Name"]}</span>
          </Card.Header>

          <Card.Meta>
            Brewery: {result["Brewery Name"]}
          </Card.Meta>

          <Card.Description>
            <p><strong>Beer Style: </strong>{result["Beer Style"]}</p>
            <p><strong>ABV: </strong>{result.ABV}</p>
            <p><strong>IBU: </strong>{result.IBU}</p>
          </Card.Description>

        </Card.Content>
      </Card>
    )}
  </Card.Group>;

export default BrewCard;