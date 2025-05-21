import React, { useEffect, useState } from "react";
import { getBlague } from "../controllers/blagueController";

const HomePage = () => {

  const [blague, setBlague] = useState([]);

  useEffect(() => {
    getBlague().then(setBlague);
  }, []);


  return (
    <div>
      <h1>Liste de Blagues</h1>
      {blague.length === 0 ? (
        <p>chargement d'une nouvelle blague.</p>
      ) : (
        <div>
        <ul>
            <li >{blague.id}</li> 
            <li >{blague.question}</li> 
            <li >{blague.reponse}</li> 
        </ul>
        <button onClick={() => window.location.reload()}>Afficher aléatoirement une blaque</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;