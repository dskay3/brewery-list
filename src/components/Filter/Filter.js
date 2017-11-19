import React from 'react';
import './Filter.css';

const Filter = props =>
  <div className="text-center">
    <span>Filter By: </span>
    <select onChange={props.sort}>
      <option>-------</option>
      <option>{props.filter1}</option>
      <option>{props.filter2}</option>
      <option>{props.filter3}</option>
      <option>{props.filter4}</option>
      <option>{props.filter5}</option>
    </select>
  </div>;

export default Filter;