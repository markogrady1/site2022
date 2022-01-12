const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function getProjects(category) {
  const response = await fetch(baseUrl + 'projects=' + category);
  if (response.ok) return response.json();
  throw response;
}

export async function getProject(id) {
  const response = await fetch(baseUrl + 'projects/' + id);
  if (response.ok) return response.json();
  throw response;
}
