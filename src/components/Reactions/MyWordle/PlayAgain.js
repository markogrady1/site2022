import React from 'react';

const PlayAgain = (props) => (
  <div className='game-complete'>
    <div
      className='game-over-message'
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {props.gameStatus === 'lost'
        ? 'Game Over. Better luck next time'
        : 'You Won'}
    </div>
    <button className='play-again-bttn' onClick={props.onClick}>
      Play Again
    </button>
  </div>
);

export default PlayAgain;
