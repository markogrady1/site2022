import React from 'react';

import useFetch from '../services/useFetch';

import Panel from './Panel';
import Spinner from './Spinner';
import PageNotFound from './PageNotFound';

function Home() {
  const { data: projects, loading, error } = useFetch('projects');

  if (loading) return <Spinner />;

  if (error) return <PageNotFound />;

  return (
    <div>
      <div className='title'>Welcome to my experience!</div>
      <div className='flex-container'>
        {projects.map((item) => {
          return <Panel key={item.id} {...item} />;
        })}
      </div>
      <div className='flex-container-thin'>
        {projects.map((item) => {
          return (
            <Panel key={item.id} niceName={item.niceName} name={item.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
