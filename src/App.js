import Home from "./Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Singlemovie from './Singlemovie'
import Error from "./Error";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
            <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="*"  element={<Error/> } />
             <Route path="movie/:id" element={<Singlemovie />}  />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
