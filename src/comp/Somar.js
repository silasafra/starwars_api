import {useState} from 'react'


export function Somar(){ 
 
  let [somar, setSomar] = useState(1);


   function colocar(){ 
   setSomar(somar+1);
  }
   
  return ( 
  
  <div className="Somar">
       
        <h1>{somar}</h1>
        <button type="button" onClick={colocar}>Mais 1</button>
  
        
      </div>  
    );
      
  }