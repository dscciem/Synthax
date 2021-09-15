import React from "react";
import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Teams from './Components/Teams/teams'
import About from './Components/About/About'
import Speaker from "./Components/Speaker/Speaker";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Teams />
      {/* <Speaker /> */}


    </div>
  );
}

export default App;
