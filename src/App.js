import logo from './logo.svg';
import './App.css';
import Hero from './screens/Hero';
import Itemcard from './components/Itemcard';
import RenderList from './components/RenderList';
import ItemDetails from './components/ItemDetails';
import 'bootstrap/dist/css/bootstrap.min.css'
import RenderMainList from './components/RenderMainList';

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from "react-router-dom";





function App() {
  return (
    <Router>
    <div className="App">
     <Hero/>
     <RenderMainList/>
      

   
     <RenderList/>
     
     <Link to="/itemDetails">Items details</Link>




    <Routes>
      <Route path="/itemDetails" element={<ItemDetails/>}>
      
      </Route>
    </Routes>

    </div>
    </Router>
  );
}

export default App;
