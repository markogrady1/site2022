import React from 'react';
import { Link } from 'react-router-dom';

const Panel = (props) => {
  return (
    <div>
      <div className='panel-name'>{props.niceName}</div>
      <div className='panel-desc'>{props.content}</div>
      {props.content && (
        <Link to={props.name} className='bttn bttn-grey'>
          Check it out
        </Link>
      )}
    </div>
  );
};

export default Panel;
