import CharacterCard from "./CharacterCard";

function CharacterList({ filteredCharacters, onSelectCharacter }) {
  return (
    <section className="cards">
      {filteredCharacters.map((eachCharacter) => (
        <CharacterCard key={eachCharacter.id} character={eachCharacter} onSelectCharacter={onSelectCharacter} />
      ))}
    </section>
  );
}

export default CharacterList;
