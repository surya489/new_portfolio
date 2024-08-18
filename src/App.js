import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero jobTitle="Front-end Developer" name='Jaya Surya' />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
