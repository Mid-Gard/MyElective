import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class Contacts extends Flux.View {
    render() {
        return (
            <div className="container">
                <div>
                    <h1 className="text-center mt-5">Add a new contact</h1>
                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control" placeholder="Full Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="phone" className="form-control" placeholder="Enter phone" />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="Enter address" />
                        </div>
                        <button type="button" className="btn btn-primary form-control">save</button>
                        <button type="button" className="btn btn-sm btn-dark"><Link className="mt-3 w-100 text-center" to="/">Go Back</Link></button>
                    </form>
                </div>
            </div>
        );
    }
}