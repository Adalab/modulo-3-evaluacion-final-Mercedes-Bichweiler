import { useParams, useNavigate, Link } from "react-router";
import "../styles/CharacterDetail.scss";





function CharacterDetail({ allCharacters }) {
  const { characterId } = useParams();
  const navigate = useNavigate();

   const character = allCharacters.find((c) => c.id == characterId);

  if (!character) {
    return (
      <article className="detail-overlay">
        <h2>Personaje no encontrado</h2>
        <Link to="/">Volver al listado</Link>
      </article>
    );
  }

  return (
    <div className="detail-overlay">
      <div className="detail-modal">
        <button className="detail-modal__close" onClick={() => navigate("/")}>
          ✕
        </button>
        <img
          src={character.image}
          alt={character.name}
          className="detail-modal__image"
        />
        <div className="detail-modal__content">
          <h2>{character.name}</h2>
          <p><strong>Casa:</strong> {character.house || "N/A"}</p>
          <p><strong>Especie:</strong> {character.species}</p>
          <p><strong>Estado:</strong> {character.alive ? "Vivo" : "Fallecido"}</p>
          {character.alternate_names && character.alternate_names.length > 0 && (
            <p><strong>Nombres alternativos:</strong> {character.alternate_names.join(", ")}</p>
          )}
          <p><strong>Actor:</strong> {character.actor}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
