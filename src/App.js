import Homepage from './components/homepage/Homepage';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
     <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
    </HashRouter>       
    </div>
  );
}

export default App;
