import "./App.css";
import { useState } from "react";
import AnimalShow from "./Animal";
function App() {
  function randomAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

    return animals[Math.floor(Math.random() * animals.length)];
  }

  //.............................................................
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, randomAnimal()]);
  };
  const renderedAnimal = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  //.............................................................
  return (
    <div className="App">
      <header>
        Kinder Garden
        <button className="application ">Apply</button>
        <p>Welocme to the World of KIDS</p>
      </header>

      <button onClick={handleClick}>Add Animals</button>
      <br />
      <div className="animal-list">{renderedAnimal}</div>
    </div>
  );
}

export default App;
