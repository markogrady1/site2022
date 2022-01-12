import React from 'react';
import { Link } from 'react-router-dom';

const Panel = (props) => {
  console.log(props);
  return (
    <div>
      <div className='panel-name'>{props.fullname}</div>
      <div className='panel-desc'>{props.content}</div>
      {props.content && (
        <Link to={props.name} className='btn btn-primary'>
          Check it out
        </Link>
      )}
    </div>
  );
};

export default Panel;
