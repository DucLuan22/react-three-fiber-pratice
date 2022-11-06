import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customize from "./pages/Customize";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
