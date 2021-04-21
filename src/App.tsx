import {Routes} from '../src/routes/Routes'
import {Navigation} from './components/navigation/Navigation'
import {UserProvider} from './shared/provider/UserProvider'
import './shared/global/Global.css'

function App() {
  return (
    <UserProvider>
     <Routes>
       <Navigation/>   
     </Routes>
     </UserProvider>
    
  );
}

export default App;
