function CharacterDetail({ character }) {
  if (!character) {
    return (
      <section className="detail empty">
        <h2>Selecciona un personaje para ver los detalles</h2>
      </section>
    );
  }

  return (
    <section className="detail">
      <img className="detail__image" src={character.image} alt={character.name} />
      <h2 className="detail__name">{character.name}</h2>
      <p>Especie: {character.species}</p>
      <p>Género: {character.gender}</p>
      <p>Casa: {character.house}</p>
      <p>Actor: {character.actor}</p>
    </section>
  );
}

export default CharacterDetail;
