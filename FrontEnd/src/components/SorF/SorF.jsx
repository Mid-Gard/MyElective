import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import "./Home.css";
import ContactCard from '../ContactCard';
import Modal from '../Modal';
import Header from '../Header/Header.jsx';

export default class Home extends Flux.View {
    constructor() {
        super();
        this.state = {
            showModal: false,
            elective1: "",
            elective2: ""
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        // Handle form submission here
    }

    handleElective1Change(event) {
        this.setState({ elective1: event.target.value });
    }

    handleElective2Change(event) {
        this.setState({ elective2: event.target.value });
    }

    render() {
        return (
            <div className="containerr">
                <div className="Header">
                    <Header />
                </div>
                <div className="list">
                    <div className="subheading">Select your elective:</div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="subheading">Elective 1:</div>
                        <select
                            name="elective1"
                            className="dropdown-menu"
                            value={this.state.elective1}
                            onChange={this.handleElective1Change.bind(this)}
                        >
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </select>
                        <div className="subheading">Elective 2:</div>
                        <select
                            name="elective2"
                            className="dropdown-menu"
                            value={this.state.elective2}
                            onChange={this.handleElective2Change.bind(this)}
                        >
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </select>
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </form>
                </div>
                <Modal
                    show={this.state.showModal}
                    onClose={() => this.setState({ showModal: false })}
                />
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
