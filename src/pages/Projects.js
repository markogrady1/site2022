import React from 'react';
import Spinner from '../components/Spinner';

export default function Product() {
  const loading = true;

  if (!loading) return <Spinner />;

  return (
    <>
      <h1>PROJECTS</h1>
    </>
  );
}
