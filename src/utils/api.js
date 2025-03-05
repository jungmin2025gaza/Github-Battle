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

export async function battle([username1, username2]) {
  const u1Info = await getUserInfo(username1);
  const u2Info = await getUserInfo(username2);

  return sortUsers([u1Info, u2Info]);
}

function sortUsers(usersInfo) {
  return usersInfo.sort((a, b) => b.score - a.score);
}

function calculateScore(followers, repos) {
  return followers * 3 + repos.length;
}

async function getUserInfo(username) {
  const profile = await getProfile(username);
  const repos = await getRepo(username);
  console.log("profile", profile);
  return {
    profile: profile,
    score: calculateScore(profile.followers, repos)
  };
}

async function getProfile(username) {
  const profile = await request(
    `https://api.github.com/users/${username}${defaultParams}`
  );
  if (profile.message) {
    throw new Error(getErrorMsg(profile.message, username));
  }

  return profile;
}

async function getRepo(username) {
  const repo = await request(
    `https://api.github.com/users/${username}/repos${defaultParams}&per_page=100`
  );
  if (repo.message) {
    throw new Error(getErrorMsg(repo.message, username));
  }

  return repo;
}

function getErrorMsg(message, username) {
  if (message === "Not Found") {
    return `${username} does not exist`;
  }
  return message;
}

function request(uri) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        resolve(JSON.parse(xhr.responseText));
      }
    };

    xhr.open("GET", uri, true);
    xhr.send(null);
  })
}
