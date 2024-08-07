import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import MyName from "./Components/Myname";
import About from './Components/About/about';
import Skills from './Components/Skills/skills'
import Projects from './Components/Projects/project.js';
import Education from './Components/Education/education.js';
import Experience from './Components/Experience/experience.js';
import Resume from './Components/Resume/Resume.js';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="mb-4" />
          <Routes>
            <Route path = "/" element={ 
              <MyName 
                text={[
                  "Hello I am Web Developer",
                  "I am a Full Stack Developer",
                  "I Know MERN Stack",
                  "I am a Competitive Programmer",
                ]}
                TypingSpeed={100}
                EraseSpeed={50}
                duration={1000}/>
              } 
            /> 
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
