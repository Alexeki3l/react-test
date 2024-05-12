import React from "react";

import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

// Aqui es donde se ponen los componentes principales de la aplicacion
function App() {
  return (
    <>
      <h1>Ejercicios con ReactJS</h1>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  );
}

export default App;
