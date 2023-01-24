//imports
import { Routes, Route } from "react-router-dom";

//styles
import "./_app.scss";

//components
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/my-portfolio" element={<Welcome />} />
        <Route path="/my-portfolio/about" element={<About />} />
        <Route path="/my-portfolio/experience" element={<Experience />} />
        <Route path="/my-portfolio/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
