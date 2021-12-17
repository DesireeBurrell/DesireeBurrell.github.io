// import logo from './DesireeBurrell.JPG';
import './App.css';
import{Link} from 'react-router-dom'
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home'
import Contacts from './components/Contacts';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './components/Main'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contacts/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </BrowserRouter>
      </div>
    
  );
}

export default App;
