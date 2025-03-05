const GITHUB_CLIENT_ID = "GITHUB_CLIENT_ID";
const GITHUB_SECRET_ID = "GITHUB_SECRET_ID";

const defaultParams = `?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_SECRET_ID}`;

export async function getPopularRepos(language) {
  const endPoint = window.encodeURI(
    `https://api.github.com/search/repositories${defaultParams}&q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );
  const response = await fetch(endPoint);
  const { items } = await response.json();
  return items;
}
