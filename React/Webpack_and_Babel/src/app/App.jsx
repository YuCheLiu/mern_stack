import React from "react";
import ReactDOM from 'react-dom'
function Welcome(){
    return <h1>Hello from App.jsx</h1>
}

const element = <Welcome></Welcome>;
    
ReactDOM.render(element, document.getElementById("root"));
