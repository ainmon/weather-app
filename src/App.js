
import './App.css';
import Home from './Home';
import About from './components/About';
import Map from './components/Map';
import {Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
