import "./styles.css";

export default function Card({ repo }) {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="img-container">
          <img src={repo.owner.avatar_url} alt="" />
        </div>
        <p>name: {repo.name}</p>
        <p>owner: {repo.owner.login}</p>
        <p>link: {repo.html_url}</p>
        <p># of watchers: {repo.watchers_count}</p>
        <p># of forks: {repo.forks}</p>
      </div>
      <div className="button-container"></div>
    </div>
  );
}
