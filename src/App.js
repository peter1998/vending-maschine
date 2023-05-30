import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VendingMachine from "./components/VendingMachine ";
import NextPhase from "./components/NextPhase";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/next-plan" element={<NextPhase />} />
      </Routes>
    </Router>
  );
};

export default App;
