import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageBox = props => 
  <Message>
    <Message.Header>
      {props.header}
    </Message.Header>
    <p>
      {props.body}
    </p>
  </Message>;

export default MessageBox;