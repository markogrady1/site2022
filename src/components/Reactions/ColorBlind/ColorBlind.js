import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { randomArrayToMatrix, random } from '../../../utils';

import Circle from './Circle';
import './ColorBlind.css';

function ColorBlind() {
  const [circleArr, setCircleArr] = useState(randomArrayToMatrix());

  const [color, setColor] = useState(() => {
    return Math.floor(Math.random() * 16777215).toString(16);
  });
  const [randomRow, setRandomRow] = useState(() => random(1, circleArr.length));
  const [randomCol, setRandomCol] = useState(() => random(1, circleArr.length));

  useEffect(() => {
    setCircleArr(randomArrayToMatrix());
  }, []);
  const onClick = (e) => {
    if (e.target.style.filter) {
      setCircleArr(randomArrayToMatrix());

      console.log('circleArr', circleArr.length);
      setColor(Math.floor(Math.random() * 16777215).toString(16));
      setRandomRow(random(1, circleArr.length));
      setRandomCol(random(1, circleArr.length));

      console.log('you selected correctly', e.target.style.filter);
    }
  };

  const randomiseCircle = (row, col) => {
    console.log(row, col);
    console.log('randomRow', randomRow, 'randomCol', randomCol);
    console.log('circleArr.length', circleArr.length);

    return ++col === randomCol && ++row === randomRow ? true : false;
  };

  return (
    <div className='color-blind-container'>
      <div className='color-blind'>
        {circleArr.map((item, row) => {
          return (
            <div key={row} className='color-blind-row'>
              {item.map((_, col) => {
                return (
                  <Circle
                    key={col}
                    filter={randomiseCircle(row, col) ? 'brightness(85%)' : ''}
                    backgroundColor={`#${color}`}
                    onClick={onClick}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ColorBlind;
