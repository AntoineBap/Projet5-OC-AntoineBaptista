import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AppartmentDetail from "./pages/Appartment";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appartment/:id" element={<AppartmentDetail />} />
        <Route path="/notfound" element={<NotFound />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
