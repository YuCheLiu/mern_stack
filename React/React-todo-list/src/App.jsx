import React, {useState} from "react";
import ReactDOM from "react-dom";

function DisplayList(props){
    return (
        <>
            {props.disList.map(item =>
                    <ItemDisplay item = {item} delete={props.delete}></ItemDisplay>
            )}
        </>
    )
}
function ItemDisplay(props){
    return (
        <>
        <li  key={props.item}>{props.item} <button onClick={()=>props.delete(props.item)}>Delete</button></li>
        
        </>
    )
}

class TodoList extends React.Component{
    state ={
        value : "",
        list : []
    }
    handleClick = () => {
        this.state.list.push(this.state.value);
        this.setState({list: this.state.list, value:""});
    }
        
    handleDelete = (target) =>{
        const index = this.state.list.indexOf(target);
        this.state.list.splice(index,1)
        this.setState({list: this.state.list});
    }

    render(){
        return (
        <>
            <input value={this.state.value} onChange={(event)=>this.setState({value:event.target.value})}></input>
            <button onClick={this.handleClick}>Add</button>
            <DisplayList disList={this.state.list} delete={this.handleDelete}></DisplayList>
        </>
        )
    }
    
}



ReactDOM.render(<TodoList/>, document.getElementById("root"));
