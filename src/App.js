import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customize from "./pages/Customize";
import Home from "./pages/Home";
import { CustomizeProvider } from "./utils/CustomizeContext";
function App() {
  return (
    <CustomizeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customize" element={<Customize />} />
        </Routes>
      </BrowserRouter>
    </CustomizeProvider>
  );
}

export default App;
