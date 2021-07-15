import React from "react";


const Service=() => {
return(
<>
<div className="container">
 <div className="ebox">
  <div className="container-md">
  <div className="jumbotron ">
    <h1 className="display-4 text-center dbox mx-5 ">Student Progress!</h1>
    
    <div className="progress_cbox1" height="10%" >
      <div className="progress-bar bg-danger" role="progressbar" width= "15" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">PHP-15/20</div>
    </div>
    <div className="progress_cbox2" height= "30px">
      <div className="progress-bar bg-warning" role="progressbar" width= "10" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">JAVA -10/20</div>
    </div>
    <div className="progress_cbox3" height= "30px">
      <div className="progress-bar bg-success" role="progressbar" width= "18" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">PYTHON-18/20</div>
    </div>
    <div className="progress_cbox4" height= "30px">
      <div className="progress-bar bg-success" role="progressbar" width= "14" aria-valuenow="14" aria-valuemin="0" aria-valuemax="100">R PROGRAMMING(ATKT) - 14/20</div>
    </div> 
      <a className="btn btn-primary   btn-lg" href="http://localhost:3000/" role="button">Back to Home</a>
    
  </div>
  </div>
</div>
</div>

</>


);
  
};

export default Service;