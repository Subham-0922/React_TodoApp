import Box from "./components/Box";
import TodoHead from "./components/TodoHead";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import MainRoutes from "./components/MainRoutes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <MainRoutes/>
    </div>
  );
}

export default App;
