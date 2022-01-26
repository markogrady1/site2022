import React from 'react';
import useFetch from '../services/useFetch';
import Spinner from '../components/Spinner';
import PageNotFound from '../components/PageNotFound';

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

  const retrieveUseful = (items) => {
    return usefulProjects.find((item) => item === items.name);
  };

  const notNpmPublished = (repo) => {
    const notNpm = ['jQit', 'widgetJS', 'site2022', 'design-patterns'];

    return !notNpm.includes(repo);
  };

  const filteredProjects = projects.filter(retrieveUseful);

  return (
    <div>
      <div className='title'>GitHub Repositories</div>
      <div className=''>
        {filteredProjects.map((item) => (
          <a
            className='github-anchor'
            target='_blank'
            rel='noopener noreferrer'
            href={item.html_url}
          >
            <div key={item.id} className='github-container'>
              <p className='github-name'>{item.full_name}</p>
              <p className='github-desc'> {item.description}</p>
              {notNpmPublished(item.name) && (
                <div>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://www.npmjs.com/package/${item.name}`}
                  >
                    <img
                      alt='npm shield'
                      src={`https://img.shields.io/npm/v/${item.name}.svg`}
                    ></img>
                  </a>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default GitHubRepos;
