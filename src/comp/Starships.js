import { useEffect, useState } from 'react';
  
  /* 
  Aqui estar o link da api da home referente aos Planetas
  https://swapi.dev/api/starships/
   */
export function Starships(){

const [starships, setStarships] = useState([]);

useEffect(() => {
  fetch('https://swapi.dev/api/starships/')
  .then(response => response.json())
  .then(data => setStarships(data.results)
    
    )
}, []);
console.log("statsStarships",starships)

const listStarships= starships.map((value,name)=> <li key={name}> {value.name}</li>)




return (

<section className="starships">
      <h1>Espaçonaves </h1>
      
        
          <ul> {listStarships}</ul>
      

    
</section>  
  );
    
}