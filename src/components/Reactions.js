import React, { useState } from 'react';
import Spinner from './Spinner';

function Reactions() {
  const [loading, setLoading] = useState(true);

  if (!loading) return <Spinner />;

  return (
    <>
      <h1>REACTIONS</h1>
    </>
  );
}

export default Reactions;
