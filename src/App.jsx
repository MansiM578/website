import React from "react";

import About from "./Views/About";

import Home from "./Views/Home";
import Services from "./Views/Services";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contacts from "./Views/Contacts";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
