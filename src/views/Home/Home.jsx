import React from "react";
import G2 from "../../assets/galeria2.png";
import LOGO from "../../assets/logo.png";
import G4 from "../../assets/galeria4.png";

import "../../style/Home/Home.css";

export default function Home() {
  return (
    <div className="container-home">
     <article className="card 4" >
        <h3>Presencia en Redes Sociales</h3>
        <img src={G2}  alt="redes sociales" width="400" height="300" />
     </article>
     <article className="card 4">
          <h3>Arte de Vanguardia</h3>
         <img src={LOGO} alt="Vanguardia" width="400" height="300" />
     </article>
     <article className="card">
        <h3>Presente en todas las plataformas</h3>
        <img src={G4} alt="Plataformas" width="400" height="300" />
     </article>
      
      
      
    </div>    
  );
}
