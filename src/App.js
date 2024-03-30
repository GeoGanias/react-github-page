import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom"
import Visualizations from './Components/Visualizations';
import SVGAnimations from './Components/SVGAnimations';
import Home from './Components/Home';
import About from './Components/About';
import Papers from './Components/Papers';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/SVG" element={<SVGAnimations/>} />
          <Route path="/Visualizations" element={<Visualizations/>} />
          <Route path="/Papers" element={<Papers/>} />
          <Route path="/About" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
