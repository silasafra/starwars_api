// import {FilmesList} from './FilmesList.js'
import '../styles/global.scss'

import { useEffect, useState } from 'react';
  
  /* 
  Aqui estar o link da api da home referente aos filmes 
  https://swapi.dev/api/films/ 
   */
export function Filmes(){

const [filmes, setFilmes] = useState([]);

useEffect(() => {
  fetch('https://swapi.dev/api/films/')
  .then(response => response.json())
  .then(data => setFilmes(data.results)
    
    )
}, []);
console.log("statFilmes",filmes)
const listFilmes= filmes.map((value,title)=> <li key={title}> {value.title}</li>)

return (
                 
<section className="filmes">
      <h1>Lista de filmes</h1>
      
      
          <ul > {listFilmes}  </ul>
      

            
</section>  
  );
    
}