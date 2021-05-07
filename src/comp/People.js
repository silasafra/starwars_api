import { useEffect, useState } from 'react';
  
  /* 
  Aqui estar o link da api da home referente aos personagens
  https://swapi.dev/api/people/
   */
export function People(){

const [people, setPeople] = useState([]);

useEffect(() => {
  fetch('https://swapi.dev/api/people/')
  .then(response => response.json())
  .then(data => setPeople(data.results)
    
    )
}, []);
console.log("statePeople",people)

const listPeople= people.map((value,name)=> <li key={name}> {value.name}</li>)




return (

<section className="people">
      <h1>Atores</h1>
      
        
          <ul> {listPeople}</ul>
      

    
</section>  
  );
    
}