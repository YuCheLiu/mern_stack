import React from "react";
import ReactDOM from 'react-dom'
//import { getName } from "./Tutorial-javascript-modular";
const {getName} = require('./Tutorial-javascript-modular.jsx');

function Welcome(){
    return <h1>Hello from Webpack {getName()}</h1>
}

const element = <Welcome></Welcome>;
    
ReactDOM.render(element, document.getElementById("root"));
