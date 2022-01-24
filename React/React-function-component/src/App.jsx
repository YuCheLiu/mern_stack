import React, {useState} from "react";
import ReactDOM from "react-dom";


class ClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {name: props.name}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event,id){
        this.setState({name:"Qoo"+id})
    }

    render(){
        return <div>
                     <h1>Hello from {this.state.name}</h1>
                     <button onClick={(event)=>this.handleClick(event, 5)}>Click me</button>
                 </div>
    }
}

// function Func(props){
//     const [name, setName]= useState(props.name);
//     function handleClick(id){
//         setName("Totoro"+id);
//     }
//     return (
//         <div>
//             <h1>Hello from {name}</h1>
//             <button onClick={()=>handleClick(5)}>Click me</button>
//         </div>
//     )
// }

// function Func(props){
//     return (
//         <div>
//             <h1>Hello from {props.name}</h1>
//         </div>
//     )
// }
ReactDOM.render(<ClassComponent name="Spencer"/>, document.getElementById("root"));
