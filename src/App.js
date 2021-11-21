import logo from "./logo.svg";
import "./App.css";
import CalcItem from "./Components/CalcItem/CalcItem";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CalcItem />
      </div>
    </div>
  );
}

export default App;
