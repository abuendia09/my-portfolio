//imports
import { Routes, Route } from "react-router-dom";

//styles
import "./_app.scss";

//components
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
