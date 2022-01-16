import React, { useState, useEffect } from 'react';

// word of the day is HARRY

const Letter = (props) => {
  return (
    <div
      onClick={() => props.clickAction(props.letter)}
      className={'letter row-' + props.row + ' col-' + props.col}
    >
      {props.letter}
    </div>
  );
};

export default Letter;
