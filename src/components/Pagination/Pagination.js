import React from 'react';
import './Pagination.css';

const Pagination = props =>
  <a
    key={props.id}
    id={props.id}
    onClick={props.handleClick}
  >
    {props.number}
  </a>

export default Pagination;