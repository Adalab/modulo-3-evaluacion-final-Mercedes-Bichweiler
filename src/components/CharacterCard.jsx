function CharacterCard({ character, onSelectCharacter }) {
  return (
    <article 
    className="card" onClick={() => onSelectCharacter(character)}>
      <img
        className="card__image"
        src={character.image}
        alt={character.name}
      />
      <h2 className="card__name">{character.name}</h2>
      <p className="card__info">Especie: {character.species}</p>
      <p className="card__info">Género: {character.gender}</p>
      <p className="card__info">Casa: {character.house}</p>
      <p className="card__info">Actor: {character.actor}</p>
    </article>
  );
}

export default CharacterCard;
