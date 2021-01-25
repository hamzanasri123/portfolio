import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import "./App.css";
const App = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Services />
      <About />
    </div>
  );
};

export default App;
