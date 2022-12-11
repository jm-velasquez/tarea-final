import React, { useEffect, useState } from "react";
import GetArt from "../../api/getArt";


export default function Content() {
  const [arts, setArt] = useState([]);

  useEffect(() => {
    async function showart() {
      const response = await GetArt();
      console.log(response);
      setArt(response);
    }
    showart();
  }, []);

  return (
             <div className="cards-list">
                {arts.map((art) => {
                
                return (
                    <div key={art.image_id} className="card">
                       <div className="card_image">
                       <img  src={ "https://www.artic.edu/iiif/2/" + art.image_id +  "/full/843,/0/default.jpg"
                   } alt={art.image_id} />
                   <div className="card_title"> <p>{art.title}</p></div> 
                    </div> 
                    </div>
                     );

             })}

            </div>
    

  );
}