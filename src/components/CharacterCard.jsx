import { useNavigate } from "react-router";


function CharacterCard({ character, onSelectCharacter }) {
  const navigate = useNavigate();

  const handleClick = () => {
    onSelectCharacter(character);
    navigate(`/character/${character.id}`);
  }
  return (
   <article className="card" onClick={handleClick} role="button" tabIndex={0}>
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
