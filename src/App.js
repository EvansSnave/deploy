import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./home";
import Countries from "./contries"

function App() {
  return (
    <div className="App">
      <div>Hello</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
