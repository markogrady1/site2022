import React, { useState } from 'react';
import { arrayToMatrix, random } from '../../../utils';

import Circle from './Circle';
import './ColorBlind.css';

function ColorBlind() {
  const [circleArr, setCircleArr] = useState(() => {
    return arrayToMatrix(
      Array.from({ length: 9 - 1 + 1 }, (_, i) => 1 + i),
      3
    );
  });

  const [color, setColor] = useState(() => {
    return Math.floor(Math.random() * 16777215).toString(16);
  });
  const [randomPos, setRandomPos] = useState(() => {
    return {
      row: random(1, circleArr.length),
      col: random(1, circleArr.length),
    };
  });

  const [filter, setFilter] = useState(85);
  const [score, setScore] = useState(0);
  const [newGame, setNewGame] = useState(false);
  const [maxScore, setMaxScore] = useState(0);

  const onClick = (e) => {
    if (e.target.style.filter) {
      if (newGame) setNewGame(false);

      setScore(score + 1);
      setFilter(() => {
        if (filter === 100) return 100;
        return filter + 1;
      });
      setCircleArr(() => {
        return arrayToMatrix(
          Array.from({ length: 9 - 1 + 1 }, (_, i) => 1 + i),
          3
        );
      });

      setColor(Math.floor(Math.random() * 16777215).toString(16));

      setRandomPos(() => {
        return {
          col: random(1, circleArr.length),
          row: random(1, circleArr.length),
        };
      });
    } else {
      if (score >= 0 && filter >= 85) {
        setNewGame(true);
      }
      setMaxScore(score);
      setScore(0);
      setFilter(85);
    }
  };

  const randomiseCircle = (row, col) => {
    return ++col === randomPos.col && ++row === randomPos.row ? true : false;
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
                    filter={
                      randomiseCircle(row, col)
                        ? 'brightness(' + filter + '%)'
                        : ''
                    }
                    backgroundColor={`#${color}`}
                    onClick={onClick}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className='score'>{score}</div>
      <div className='score'>
        {newGame ? 'Better luck next time. You scored: ' + maxScore : ''}
      </div>
    </div>
  );
}

export default ColorBlind;
