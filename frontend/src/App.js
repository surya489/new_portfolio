import './App.css';
import './Responsive.css';

import './assets/Fonts/Fonts.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about" element={<Hero />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
