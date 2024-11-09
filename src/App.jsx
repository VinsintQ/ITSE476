import { useState, createContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Download from "./components/Download/Download";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";
import Docs from "./components/Docs/Docs";
import Join from "./components/Joinus/JoinUs";
import FAQ from "./components/FAQ/FAQ";
import Announcements from "./components/Announcements/Announcements";
//Services

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />

      <Routes>
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/Joinus" element={<Join />} />
          <Route path="/Download" element={<Download />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Announcements" element={<Announcements />} />
        </>
      </Routes>
    </>
  );
};

export default App;
