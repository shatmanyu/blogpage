import React from 'react';

export default function BlogItem(props) {
  return( <div className='image'>
      <img src = {props.img} alt = ""/>
      <h4>{props.title}</h4>
  </div>
  );
}
