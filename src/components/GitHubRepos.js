import React from 'react';

import useFetch from '../services/useFetch';

import Spinner from './Spinner';
import PageNotFound from './PageNotFound';

function GitHubRepos() {
  const {
    data: projects,
    loading,
    error,
  } = useFetch(
    '/users/markogrady1/repos?per_page=100',
    'https://api.github.com'
  );

  if (loading) return <Spinner />;

  if (!projects) return <PageNotFound />;

  if (error) throw error;

  const usefulProjects = [
    'node-resque-data',
    'iso-country-map',
    'email-valid-simple',
    'aray',
    'design-patterns',
    'ember-bootstrap-pagination',
    'jQit',
    'widgetJS',
    'site2022',
  ];

  function retrieveUseful(items) {
    return usefulProjects.find((item) => item === items.name);
  }

  const filteredProjects = projects.filter(retrieveUseful);

  return (
    <div>
      <div className='title'>GitHub Repositories</div>
      <div className=''>
        {filteredProjects.map((item) => (
          <a key={item.id} href={item.html_url}>
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default GitHubRepos;
