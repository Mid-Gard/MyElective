import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import "./login.css";

export default class login extends Flux.View {
    constructor(){
        super();
        this.state = {
            showModal: false  
        };
    }

    render() {
        return (
            <div className="containerr">
                <div className="login-form">
                    <h1>Login</h1>

                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">

                            <label htmlFor="username">Username:</label>
                            <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    required
                  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                        </div>
                        <button type="submit" className="submit-button">
                  Submit
                        </button>
                    </form>
                </div>
            </div>
        );
      }
      
}










    // export default class Home extends Flux.View {
    //     constructor(){
    //         super();
    //         this.state = {
    //             showModal: false  
    //         };
    //     }
    //     render() {
    //         return (
    //             <div className="container">
    //                 <div>
    //                     <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
    //                         <ul className="list-group pull-down" id="contact-list">
    //                             <ContactCard onDelete={() => this.setState({ showModal: true})} />
    //                             <ContactCard />
    //                             <ContactCard />
    //                             <ContactCard />
    //                             <ContactCard />
    //                             <ContactCard />
    //                             <ContactCard />
    //                         </ul>
    //                     </div>
    //                 </div>
    //                 <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
    //             </div>
    //         );
    //         }
    //     }
