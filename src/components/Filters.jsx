function Filters({ 
  filterName, 
  handleFilterName, 
  filterHouse, 
  handleFilterHouse, 
  allHouses, 
  filteredCharactersLength,
  onReset, 
}) { 
  const noResults = 
    filteredCharactersLength === 0 && 
    (filterName.trim() !== "" || filterHouse !== "");
  
  return (
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

        <label className="form-label" htmlFor="search-house">
          Selecciona la casa</label>
          <select className="form-select" name="search-house" id="search-house" value={filterHouse} onChange={handleFilterHouse}>
            <option value="">Todos</option>
            {allHouses.map((eachHouse) => (
              <option key={eachHouse} value={eachHouse}>
                {eachHouse}
              </option>
            ))}
          </select>
          {noResults && (
            <div className="no-results" role="status">
              <p>No se encontraron resultados</p>
              <button type="button" className="no-results__btn" onClick={onReset}>Volver al listado</button>
            </div>
          )}
      </form>
  );
}

export default Filters; 