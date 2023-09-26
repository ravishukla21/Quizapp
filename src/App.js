import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import Score from "./Components/Score";
import Final from "./Components/Final";

function App() {
  return (
    <div className="App">
      <Home /> <Admin />
      <div>
        <Score />
      </div>
      <Final />
    </div>
  );
}

export default App;
