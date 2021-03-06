import React, { useEffect } from 'react';

export const Keyboard = ({ onEnter, onDelete, onClick, onCharacter }) => {
  useEffect(() => {
    const listener = (e) => {
      if (e.code === 'Enter') {
        onEnter();
      } else if (e.code === 'Backspace') {
        onDelete();
      } else {
        const key = e.key.toUpperCase();
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onCharacter(key);
        }
      }
    };
    window.addEventListener('keyup', listener);
    return () => {
      window.removeEventListener('keyup', listener);
    };
  }, [onEnter, onDelete, onCharacter]);

  const classes = 'key';
  return (
    <div className='keyboard'>
      <div className='keyboard-top'>
        <div
          value='Q'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          Q
        </div>
        <div
          value='W'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          W
        </div>
        <div
          value='E'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          E
        </div>
        <div
          value='R'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          R
        </div>
        <div
          value='T'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          T
        </div>
        <div
          value='Y'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          Y
        </div>
        <div
          value='U'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          U
        </div>
        <div
          value='I'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          I
        </div>
        <div
          value='O'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          O
        </div>
        <div
          value='P'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          P
        </div>
      </div>
      <div className='keyboard-mid'>
        <div
          value='A'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          A
        </div>
        <div
          value='S'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          S
        </div>
        <div
          value='D'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          D
        </div>
        <div
          value='F'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          F
        </div>
        <div
          value='G'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          G
        </div>
        <div
          value='H'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          H
        </div>
        <div
          value='J'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          J
        </div>
        <div
          value='K'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          K
        </div>
        <div
          value='L'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          L
        </div>
      </div>
      <div className='keyboard-bot'>
        <div
          value='ENTER'
          style={{ width: `100px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          ENTER
        </div>
        <div
          value='Z'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          Z
        </div>
        <div
          value='X'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          X
        </div>
        <div
          value='C'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          C
        </div>
        <div
          value='V'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          V
        </div>
        <div
          value='B'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          B
        </div>
        <div
          value='N'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          N
        </div>
        <div
          value='M'
          style={{ width: `40px`, height: '58px' }}
          className={classes}
          onClick={onClick}
        >
          M
        </div>
        <div
          value='DELETE'
          style={{ width: `100px`, height: '58px' }}
          className={classes}
          onClick={onDelete}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 0 24 24'
            width='24'
          >
            <path
              value='DELETE'
              fill='var(--color-tone-1)'
              d='M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z'
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
