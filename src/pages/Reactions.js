import React from 'react';
import useFetch from '../services/useFetch';
import Panel from '../components/Panel';
import Spinner from '../components/Spinner';
import PageNotFound from '../components/PageNotFound';
import { arrayToMatrix } from '../utils';

function Reactions() {
  const { data: projects, loading, error } = useFetch('projects');

  if (loading) return <Spinner />;

  if (error) return <PageNotFound />;

  const panelRow = (val) => {
    return (
      <Panel
        key={val.id}
        name={val.name}
        niceName={val.niceName}
        content={val.content}
      />
    );
  };

  const sortedProjects = arrayToMatrix(projects, 3);

  return (
    <div>
      <div className='title'>My React Projects</div>
      {sortedProjects.map((item, index) => {
        return (
          <div key={index} className='flex-container'>
            {item.map((projObj) => {
              return panelRow(projObj);
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Reactions;
