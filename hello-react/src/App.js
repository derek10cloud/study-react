import { Route, Routes } from "react-router-dom";
import About from "../../chapter/13.router-tutorial/src/pages/About";
import Home from "../../chapter/13.router-tutorial/src/pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
