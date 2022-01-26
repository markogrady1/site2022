import React, { useState } from 'react';
import Spinner from '../components/Spinner';

export default function Product() {
  const [loading, setLoading] = useState(true);

  if (!loading) return <Spinner />;
  // setLoading(true);

  return (
    <>
      <h1>PROJECTS</h1>
    </>
  );
}
