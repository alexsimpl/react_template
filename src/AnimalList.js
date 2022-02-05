import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function AnimalList ({items}) {
//   static protoTypes = {
//     items: PropTypes.array.isRequired,
// }
  console.log('items', items);
  return (
    <div>
        {items.map((item,index) => 
            <ul>
              <li key={index}>{item.Name} {item.Type} {item.Age} {item.Size}</li>
            </ul>
        )}
        {/* <Link to=""></Link> */}
    </div>
    );
  }
