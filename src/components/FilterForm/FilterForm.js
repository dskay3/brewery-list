import React from 'react';
import { Form, Button, Header, Segment } from 'semantic-ui-react';
import './FilterForm.css';

const FilterForm = props => 
  <div className="form-container">
    <Header as='h2' attached='top'>
      {props.formHeader}
    </Header>

    <Segment attached>
      <Form>
        <Form.Group widths='equal' >
          <Form.Input 
            required
            label={props.label1}
            value={props.brewery} 
            name={props.inputName}
            onChange={props.handleInputChange} 
            placeholder={props.placeholder1} />
        </Form.Group>

        <Button.Group>
          <Button positive onClick={props.handleFormSubmit}>Submit</Button>
          <Button.Or />
          <Button onClick={props.handleReset}>Reset Filter</Button>
        </Button.Group>
      </Form>
    </Segment>
  </div>;

export default FilterForm;