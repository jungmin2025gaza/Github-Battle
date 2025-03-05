import "./styles.css";
import NavButton from "../NavButton";
import PopularRepo from "../PopularRepo";
import Battle from "../Battle";
import { useState } from "react";

export default function App() {
  const [showBattle, setShowBattle] = useState(false);

  function toggleBattleView() {
    setShowBattle(!showBattle);
  }

  return (
    <div className="container">
      <div className="navbar">
        <NavButton
          isActive={!showBattle}
          text="popularRepo"
          onClick={toggleBattleView}
        />
        <NavButton
          isActive={showBattle}
          text="battle"
          onClick={toggleBattleView}
        />
      </div>
      <div className="ground">
        {showBattle ? <Battle /> : <PopularRepo />}
      </div>
    </div>
  );
}
