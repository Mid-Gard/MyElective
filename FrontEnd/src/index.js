//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
import './icons.js';

//include your index.scss file into the bundle
import './styles/index.scss';

//import your own components
import App from './App.jsx';
import Header from './components/Header/Header.jsx';

// render your react application
ReactDOM.render(
    <App />,
    document.querySelector('#app')
);
