import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Dashboard from "./Dashboard";
import ViewReport from "./ViewReport";
import Exams from "./Exams";



import Navbar from "./Navbar";

import { Switch, Route, } from "react-router-dom";

function App() {
  return (
    <>
  <Navbar />
  <switch>
  <Route exact path="/Dashboard" component={Dashboard} />
  <Route exact path="/Exams" component={Exams} />
  <Route exact path="/ViewReport" component={ViewReport} />
  
  
 
  
  </switch>
  </>
  );
}

export default App;
