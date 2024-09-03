import './App.css';
import './Responsive.css';

import './assets/Fonts/Fonts.css';
import NavBar from './Components/NavBar/NavBar';
import Button from './Components/Button/Button';
import resume from './assets/resume.pdf';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Button isDownload={true} link={resume}>Download Resume</Button>
    </div>
  );
}

export default App;
