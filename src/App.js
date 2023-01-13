import "./App.css";

//images
import profileImage from "./assets/image0.jpeg";

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <h2>Author: Adrie Buendia</h2>
      <img className="App-logo" src={profileImage} alt="Profile" />
    </div>
  );
}

export default App;
