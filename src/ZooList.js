import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function ZooList ({items}) {
  // static protoTypes = {
  //     items: PropTypes.array.isRequired,
  // }
 
  console.log('items', items);
  return (
  <div>
      {items.map((item,index) => 
          <ul>
            <li key={index}>{item.Name} {item.Address} {item.Phone} {item.Email} {item.SupCage.sCage}</li>
          </ul>
      )}
  </div>
  );
  }
