import { useState } from "react";
import NavButton from "../NavButton";
import PopularRepo from "../PopularRepo";
import Battle from "../Battle";
import "./styles.css";

export default function App() {
  const [showBattle, setShowBattle] = useState(false);

  function toggleBattleView() {
    setShowBattle(!showBattle);
  }

  return (
    <div className="container">
      <div className="flex space-between">
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
      {showBattle ? <Battle /> : <PopularRepo />}
    </div>
  );
}
