import React from 'react'




const About = () => {
  return (

    <>

      <div className="test">
        <br></br>
        <h3>List of Test Assign</h3>
        <br></br>



  
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Class</th>
      <th scope="col">Test Name</th>
      <th scope="col">Duration (in hrs)</th>
      <th scope="col">Total Marks</th>
      <th scope="col">Upload File</th>
      <th scope="col">Assign Test</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>FE</td>
      <td>Applied Maths 1</td>
      <td>3 hrs</td>
      <td>80</td>
      <td> <input class="form-control" type="file" id="formFile"></input></td>
      <td><button type="button" href="" class="btn btn-outline-dark">Assign</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>SE</td>
      <td>Embeded System</td>
       <td>3 hrs</td>
       <td>80</td>
       <td> <input class="form-control" type="file" id="formFile"></input></td>
       <td><button type="button" class="btn btn-outline-dark">Assign</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >TE</td>
      <td>PythonProgrammingLangugage</td>
       <td>3 hrs</td>
       <td>80</td>
       <td> <input class="form-control" type="file" id="formFile"></input></td>
       <td><button type="button" class="btn btn-outline-dark">Assign</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >BE</td>
      <td>Optical Communication</td>
       <td>3 hrs</td>
       <td>80</td>
       <td> <input class="form-control" type="file" id="formFile"></input></td>
        <td><button type="button" class="btn btn-outline-dark">Assign</button></td>
    </tr>
  </tbody>
</table>


<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




      </div>





    </>






  );
};

export default About;