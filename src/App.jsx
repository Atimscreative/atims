import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="contact" index element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
