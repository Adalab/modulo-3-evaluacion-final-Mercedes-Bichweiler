Harry Potter Characters App

Descripción:

Aplicación en React que permite explorar personajes del universo de Harry Potter usando la API pública "https://hp-api.onrender.com/api/characters".

Funciones principales:

. Buscar personajes por nombre.
. Buscar personajes por genero.
. Filtrar por casa.
. Ver el detalle de cada personaje.
. Mantener los filtros al volver desde la vista de detalle.

Componentes principales:

. App.jsx: Estado global de filtros y personajes; rutas de la aplicación.
. Filters.jsx: Formulario para filtrar personajes por nombre, género y casa.
. CharacterList.jsx: Renderiza tarjetas de personajes filtrados.
. CharacterCard.jsx: Tarjeta individual con información básica.
. CharacterDetail.jsx: Información completa del personaje.
. Header.jsx: Cabecera de la aplicación.

Tecnologías:

. React (Hooks: useState, useEffect)
. React Router (rutas y navegación)
. Fetch API
. SCSS
. Vite
