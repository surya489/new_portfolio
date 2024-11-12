import './App.css';
import './Responsive.css';
import { Helmet } from "react-helmet";

import './assets/Fonts/Fonts.css';
import NavBar from './Components/NavBar/NavBar';
import Button from './Components/Button/Button';
import resume from './assets/resume.pdf';

function App() {
  return (
    <div className="App">
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jaya Surya",
              "jobTitle": "Front-end Developer",
              "url": "https://jayasurya-portfolio-new.vercel.app/",
              "description": "Front-end Developer specializing in React and UI design."
            }
          `}
        </script>
      </Helmet>
      <NavBar />
      <Button isDownload={true} link={resume}>Download Resume</Button>
    </div>
  );
}

export default App;
