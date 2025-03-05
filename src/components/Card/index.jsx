import "./styles.css";

export default function Card({ repo, profile, score }) {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="img-container">
          {repo && (
            <img src={repo.owner.avatar_url} alt="" />
          )}
          {profile && (
            <img src={profile.avatar_url} alt="cannot upload" />
          )}
        </div>
        {repo && (
          <div>
            <p>name: {repo.name || profile.name}</p>
            <p>owner: {repo.owner.login}</p>
            <p>link: {repo.html_url}</p>
            <p># of watchers: {repo.watchers_count}</p>
            <p># of forks: {repo.forks}</p>
          </div>
        )}
        {profile && (
          <div>
            <p>username: {profile.name}</p>
            <p>location: {profile.location}</p>
            <p>score: {score}</p>
            <p># of followers: {profile.followers}</p>
            <p># of repos: {profile.public_repos}</p>
          </div>
        )}
      </div>
      <div className="button-container"></div>
    </div>
  );
}
