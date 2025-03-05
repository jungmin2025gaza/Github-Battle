import "./styles.css";
import LANGUAGES from "../../constants/languages.js";
import Loader from "../Loader";
import Card from "../Card";
import { useState, useEffect } from "react";
import { getPopularRepos } from "../../utils/api.js";

export default function PopularRepo() {
  const [popRepos, setPopRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function changeLanguage(e) {
    setSelectedLanguage(e.target.value);
  }

  useEffect(() => {
    const fetchPopRepos = async () => {
      if (selectedLanguage) {
        setIsLoading(true);
        const selectedPopRepos = await getPopularRepos(selectedLanguage);
        setPopRepos(selectedPopRepos);
        setIsLoading(false);
      }
    }
    fetchPopRepos();
  }, [selectedLanguage]);

  if (isLoading) {
    return <Loader />
  }
  return (
    <div className="poprepo-container">
      <select className="language"
        value={selectedLanguage}
        onChange={changeLanguage}
      >
        <label htmlFor="language-select">Choose language</label>
        <option>--choose option--</option>
        {LANGUAGES.map((language) => {
          return <option value={language}>{language}</option>
        })}
      </select>
      {(popRepos.length > 0) && (!isLoading) && (
        <div>
          {popRepos.map((popRepo) => (
            <Card repo={popRepo} />
          ))}
        </div>
      )
      }
    </div >
  )
}
