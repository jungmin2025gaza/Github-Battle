import { useState, useEffect } from "react";
// import { getPopularRepos } from "../utils/api.js";
import LANGUAGES from "../../constants/languages.js";
import "./styles.css";

export default function PopularRepo() {
  const [popRepos, setPopRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  function changeLanguage(e) {
    setSelectedLanguage(e.target.value);
  }

  useEffect(() => {
    console.log("changed language is ", selectedLanguage);

  }, [selectedLanguage]);

  return (
    <div>
      <select className="language"
        onChange={changeLanguage}
      >
        <label></label>
        <option>--choose option--</option>
        {LANGUAGES.map((language) => {
          return <option value={language}>{language}</option>
        })}
      </select>

    </div >
  )
}
