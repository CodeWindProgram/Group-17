import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";



import Navbar from "./Navbar";

import { Switch, Route, } from "react-router-dom";

function App() {
  return (
    <>
  <Navbar />
  <switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/About" component={About} />
  <Route exact path="/Service" component={Service} />
  
  
 
  
  </switch>
  </>
  );
}

export default App;
