import './App.css';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        

      </div>
    </Router>
    
  );
}

export default App;
