import "../styles/App.scss";
import { useState, useEffect } from "react";  



function App() {
  // listado de personajes
  const [allCharacters, setAllCharacters] = useState([]);

  // filtro de personajes
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

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

  const allHouses = [...new Set(allCharacters.map((eachCharacter) => eachCharacter.house).filter( house => house))];


  return (
    <div>
      <header className="header">
        <h1 className="title">Harry Potter</h1>
      </header>
      <main className="main">
        <form className="filters">
          <label className="filters__label" htmlFor="name">
            Busca por personajes:
            <input
              className="filters__input"
              type="text"
              name="name"
              id="name"
              value={filterName}
              onChange={handleFilterName}
            />
          </label>
          <label className="form-label" htmlFor="search-house">Selecciona la casa</label>
          <select className="form-select" name="search-house" id="search-house" value={filterHouse} onChange={handleFilterHouse}>
            <option value="">Todos</option>
            {allHouses.map((eachHouse) => (
              <option key={eachHouse} value={eachHouse}>
                {eachHouse}
              </option>
            ))}
          </select>
        </form>
        <form className="cards">
          {filteredCharacters.map((eachCharacter) => (
            <article key={eachCharacter.id} className="card">
              <img
                className="card__image"
                src={eachCharacter.image}
                alt={eachCharacter.name}
              />
              <h2 className="card__name">{eachCharacter.name}</h2>
              <p className="card__info">Especie: {eachCharacter.species}</p>
              <p className="card__info">Género: {eachCharacter.gender}</p>
              <p className="card__info">Casa: {eachCharacter.house}</p>
              <p className="card__info">Actor: {eachCharacter.actor}</p>
            </article>
          ))}
        </form>
      </main>
    </div>
  );
}

export default App;
