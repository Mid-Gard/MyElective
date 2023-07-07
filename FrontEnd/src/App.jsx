import React from 'react';
import { BrowserRouter as Router, Routes} from "react-router-dom";
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacts from "./views/Contacts.jsx";
import AddContact from "./views/AddContact.jsx";
import "./App.css";
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import login from './components/login/login.jsx';

export default class App extends Flux.View {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="Appcontainer">
                        <div className="Appcontent">
                            <Switch>
                                <Route exact path="/index.html" component={Contacts} />
                                <Route exact path="/" component={Home} />
                                <Route exact path="/contacts" component={Contacts} />
                                <Route exact path="/add" component={AddContact} />
                                <Route exact path="/edit" component={AddContact} />
                                <Route render={() => <h1 className="notfound">Not found!</h1>} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

// function App() {
//     return (
//         <Router>
//             <div className="Appcontainer">
//                 <div className="Appcontent">
//                     <Header />
//                     <Routes>
//                         <Route exact path="/index.html" component={Contacts} />
//                         <Route exact path="/" component={Contacts} />
//                         <Route exact path="/contacts" component={Contacts} />
//                         <Route exact path="/add" component={AddContact} />
//                         <Route exact path="/edit" component={AddContact} />
//                         <Route render={() => <h1 className="notfound">Not found!</h1>} />
//                     </Routes>
//                 </div>
//                 <div className="Appsidebar">
//                 </div>
//             </div>
//         </Router>
//     );
//   }
  
//   export default App;
