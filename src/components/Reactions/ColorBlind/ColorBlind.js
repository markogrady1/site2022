import React, { useState } from 'react';
import { arrayToMatrix } from '../../../utils';

import Circle from './Circle';
import './ColorBlind.css';

function ColorBlind() {
  const [circleArr, setCircleArr] = useState(() => {
    const matrixAttr = Math.random() < 0.5 ? [4, 2] : [9, 3];

    return arrayToMatrix(
      Array.from({ length: matrixAttr[0] - 1 + 1 }, (_, i) => 1 + i),
      matrixAttr[1]
    );
  });

  return (
    <div className='color-blind-container'>
      {circleArr.map((item, index) => {
        return (
          <div key={index} className='color-blind-row'>
            {item.map((_, index) => {
              return <Circle key={index} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ColorBlind;
