import cors from "cors";
import axios from "axios";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BundesligaTable from "./components/BundesligaTable";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table" element={<BundesligaTable />} />
      </Routes>
    </Router>
  );
}

export default App;
