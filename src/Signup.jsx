import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div classname="row">
                    <div classname="col-10mx-auto">



                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">

                                <NavLink className="navbar-brand" to="/">Admin </NavLink>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/About">About</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/Service">Service</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/Contact">Contact</NavLink>
                                        </li>


                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="#">Link</NavLink>
                                        </li>


                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>





            
    

            
           





            
        </>
    );
};

export default Navbar;