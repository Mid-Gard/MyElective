import React, { useState } from "react";
import { Link } from "react-router-dom";
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.png"; // Import the logo file

import "./Header.css";

export default class Header extends Flux.View {
    constructor(){
        super();
        this.state = {
            showModal: false  
        };
    }
    render(){
        return (
            <div className="header">
                <div className="app-bar">
                    <div className="toolbar">
                        <div className="logo">
                            <img src={logo} alt="logos" className="logo-img" />
                        </div>
                        <div className="title">
                            <h6>My Elective</h6>
      
                        </div>
                        <div className="navbuttons">
                            <div className="nav-item">
                                <h6>
                                    <Link to="/" className="nav-link">
                    Home
                                    </Link>
                                </h6>
                            </div>
                            <div className="nav-item">
                                <h6>
                                    <Link to="/" className="nav-link">
                    Students
                                    </Link>
                                </h6>
                            </div>
                            <div className="nav-item">
                                <h6>
                                    <Link to="/" className="nav-link">
                    User
                                    </Link>
                                </h6>
                            </div>
                        </div>
      
                    </div>
                </div>
            </div>
      
        );
    }
}


