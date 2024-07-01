
//React Routes
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home.js"

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
