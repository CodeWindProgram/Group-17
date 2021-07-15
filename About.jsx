import React from 'react'




const About = () => {
    return (

        <>
            <div className="container">


                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">SubjectName</th>
                            <th scope="col">SubjectDescription</th>
                            <th scope="col">Mode</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <br></br>
                    <br></br>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>PHP</td>
                            <td>PHP ProgramingLanguage</td>
                            <td>Offline</td>
                            <td> <input class="form-control" type="file" id="formFile"></input></td>
                            <a className="btn btn-primary   btn-lg" role="button">Submit</a>
                            
                        </tr>
                        <br></br>
                        <br></br>
                        <tr>
                            <th scope="row">2</th>
                            <td>Java</td>
                            <td>JavaProgrammingLanguage</td>
                            <td>Online</td>
                            <a className="btn btn-primary   btn-lg" href="https://forms.gle/cuR29CmLUWkSZJ426" role="button">Start Exam</a>
                        </tr>
                        <br></br>
                        <br></br>
                        <tr>
                            <th scope="row">3</th>
                            <td >Python</td>
                            <td>PythonProgrammingLangugage</td>
                            <td>Online</td>
                            <a className="btn btn-primary   btn-lg" href="" role="button"> Start Exam</a>
                        </tr>
                        <br></br>
                        <br></br>
                        <tr>
                            <th scope="row">4</th>
                            <td >R Programming(ATKT Exam)</td>
                            <td>RProgrammingLangugage</td>
                            <td>online</td>
                            <a className="btn btn-primary   btn-lg" href="" role="button">Start Exam</a>
                        </tr>
                        <br></br>
                        <br></br>
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











                <hr></hr>
            </div>













        </>

    );
};

export default About;