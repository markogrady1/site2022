import React from 'react';

function Circle(props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        backgroundColor: props.backgroundColor,
        filter: props.filter,
      }}
      className='circle'
    ></div>
  );
}

export default Circle;
