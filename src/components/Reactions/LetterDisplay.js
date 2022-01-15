import React from 'react';

import Letter from './Letter';

const LetterDisplay = (props) =>
  Array.from({ length: props.count }, (_, i) => i + 1).map((_, i) => {
    return <Letter key={i} />;
  });

export default LetterDisplay;
