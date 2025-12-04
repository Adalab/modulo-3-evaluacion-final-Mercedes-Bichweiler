import "../styles/App.scss";
import { useState, useEffect } from "react";  
import Header from "./Layout/Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { Routes, Route } from "react-router";




function App() {
  // listado de personajes
  const [allCharacters, setAllCharacters] = useState([]);

  // filtro de personajes
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // eventos de los filtros
  const handleFilterName = (ev) => {
    setFilterName(ev.target.value);
  }
 
  const handleFilterHouse = (ev) => {
    setFilterHouse(ev.target.value);
  }


  // llamada a la API 
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((respondeData) => {
        const allCleanedData = respondeData.map((eachCharacter) => ({
          id: eachCharacter.id,
          image: eachCharacter.image || "https://placehold.co/600x400/png?text=HarryPotter",
          name: eachCharacter.name,
          species: eachCharacter.species,
          gender: eachCharacter.gender,
          house: eachCharacter.house,
          actor: eachCharacter.actor,
        }));
        setAllCharacters(allCleanedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  // variables para pintar en la pagina
  const filteredCharacters = allCharacters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(filterName.toLowerCase()) &&
    (filterHouse === "" || eachCharacter.house === filterHouse)
  );

  //casas sin repeticion
  const allHouses = [...new Set(allCharacters.map((eachCharacter) => eachCharacter.house).filter( house => house))];


  return (
    <div>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  filterName={filterName}
                  handleFilterName={handleFilterName}
                  filterHouse={filterHouse}
                  handleFilterHouse={handleFilterHouse}
                  allHouses={allHouses}
                  filteredCharactersLength={filteredCharacters.length}
                  onReset={() => { setFilterName(""); setFilterHouse(""); }}
                />
                <CharacterList
                  filteredCharacters={filteredCharacters}
                  onSelectCharacter={() => {}}
                />
              </>
            }
          />
          <Route 
            path="/character/:characterId" 
            element={<CharacterDetail allCharacters={allCharacters} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
