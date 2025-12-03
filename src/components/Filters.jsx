function Filters({ filterName, handleFilterName, filterHouse, handleFilterHouse, allHouses }) {  
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
  );
}

export default Filters;