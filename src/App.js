import './styles/global.scss'
import { Banner} from './comp/banner';
import { Filmes } from './comp/Filmes';

import { People } from './comp/People';
import { Planets } from './comp/Planets';
import { Starships } from './comp/Starships';
function App() {
  return( <> 
          <Banner/>
          <Filmes/>
          <People/>
          <Planets/>
          <Starships/>
        </>
         
  )
}

export default App;
