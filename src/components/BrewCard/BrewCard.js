import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

const BrewCard = props => 
  <Card.Group>
    {props.data.map(result => 
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
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