import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AutomaticImageDownload from "./Components/AutomaticImageDownload";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/img/:imgName" element={<AutomaticImageDownload />} />
      </Routes>
    </div>
  );
}

export default App;
