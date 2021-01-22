import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from "./index.js";
import Character from "./components/Character.js";
import axios from "axios";
export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`${BASE_URL}api/people`)
      .then((res) => setCharacter(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1 className="App">Characters</h1>
      {character.map((obj) => {
        return <Character character={obj} />;
      })}
    </div>
  );
}
