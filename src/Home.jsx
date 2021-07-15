import React from 'react'



const Home = () => {
  return (
    <>






      <div className="admin">

        <br></br>

        <form>
          <h3>My profile</h3>
          <hr></hr>
          <br></br>
          <div class="row">
            <div class="col">
              <label for="exampleInputName">First Name:</label>
            </div>

            <div class="col">
              <label for="exampleInputName">Second Name:</label>
            </div>

            <div class="col">
              <label for="exampleInputName">Last Name:</label>
            </div>

          </div>

          <br></br>

          <div class="form-group">
            <label for="exampleInputEmail1">Email address:</label>
          </div>

          <br></br>


          <div class="form-group">
            <label for="exampleInputID">Faculty ID:</label>
          </div>
          <br></br>




          <div class="form-group">
            <label for="exampleInputDepartment">Department:</label>
          </div>

          <br></br>

          <div class="form-group">
            <label for="exampleInputDepartment">Qualification:</label>
          </div>

          <br></br>

          <div class="form-group">
            <label for="exampleInputDepartment">Contact No:</label>
          </div>

          <br></br>



         
           
            <input class="form-control" type="file" id="formFile"></input>
         



        </form>








      </div>









    </>
  );
};

export default Home;