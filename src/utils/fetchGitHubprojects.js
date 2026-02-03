const GITHUB_USERNAME = "Avinash55o";

export async function fetchGitHubProject(repoName) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${repoName}`);
    }
    
    const data = await response.json();
    
    return {
      id: data.id,
      projectName: data.name,
      description: data.description || "No description available",
      tech: data.topics || [], // GitHub topics as tech stack
      link: data.homepage || `/not-available`,
      github: data.html_url,
      stars: data.stargazers_count,
      forks: data.forks_count,
    };
  } catch (error) {
    console.error(`Error fetching ${repoName}:`, error);
    return null;
  }
}

export async function fetchAllProjects(projectNames) {
  const promises = projectNames.map(name => fetchGitHubProject(name));
  const results = await Promise.all(promises);
  
  // Filter out any failed fetches (null values)
  return results.filter(project => project !== null);
}