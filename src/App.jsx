import { useState, createContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";
import Join from "./components/Joinus/JoinUs";
import Faq from "./components/Faq/Faq";
import Announcement from "./components/Announcement/Announcement";
import Conduct from "./components/conduct/conduct";
import { FaQ } from "react-icons/fa6";
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
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Announcements" element={<Announcement />} />
          <Route path="/Discover" element={<Conduct />} />
        </>
      </Routes>
    </>
  );
};

export default App;
