import "./styles.css";
import Card from "../Card";
import Loader from "../Loader";
import { battle } from "../../utils/api.js";
import { useState } from "react";

export default function Battle() {
  const [user, setUser] = useState(null);
  const [user2, setUser2] = useState(null);
  const [usersInfo, setUsersInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const result = await battle([user, user2]);
    setUsersInfo(result);
    setIsLoading(false);
  }
  if (isLoading) {
    return <Loader />
  }
  return (
    <div className="container">
      <div>
        <label>Type in github user: </label>
        <input name="user" value={user} onChange={e => setUser(e.target.value)} />
      </div>
      <div>
        <label>Type in github user to battle with: </label>
        <input name="user2" value={user2} onChange={e => setUser2(e.target.value)} />
      </div>
      <button onClick={handleClick} disabled={!user || !user2}>
        submit
      </button>
      {(usersInfo.length > 0) && (
        <div>
          {usersInfo.map((userInfo, index) => {
            let rankDisplay = [];
            rankDisplay.push(<div> index===0? Winner : Looser </div>);
            rankDisplay.push(<Card profile={userInfo.profile} score={userInfo.score} />);
            return rankDisplay;
          })}
        </div>
      )}
    </div>
  );
}
