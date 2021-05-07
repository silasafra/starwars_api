import { useEffect, useState } from 'react';
  
  /* 
  Aqui estar o link da api da home referente aos Planetas
  https://swapi.dev/api/planets/
   */
export function Planets(){

const [planets, setPlanets] = useState([]);

useEffect(() => {
  fetch('https://swapi.dev/api/planets/')
  .then(response => response.json())
  .then(data => setPlanets(data.results)
    
    )
}, []);
console.log("statePlanets",planets)

const listPlanets= planets.map((value,name)=> <li key={name}> {value.name}</li>)




return (

<section className="planets">
      <h1>Planetas</h1>
      
        
          <ul> {listPlanets}</ul>
      

    
</section>  
  );
    
}