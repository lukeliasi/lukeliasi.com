export async function getGitHubRepoInfo(repoUrl: string) {
  // TODO: error handle
  console.log("firing network");
  

  const res = await fetch("https://api.github.com/repos/" + repoUrl);
  const data = await res.json();
  return data;
}