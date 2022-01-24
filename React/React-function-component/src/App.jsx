import React, {useState} from "react";
import ReactDOM from "react-dom";


class ClassComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <h1>Hello from Class</h1>
    }
}

function Func(props){
    const [name, setName]= useState(props.name);
    function handleClick(){
        setName("Totoro");
    }
    return (
        <div>
            <h1>Hello from {name}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
ReactDOM.render(<Func name="Spencer"/>, document.getElementById("root"));
