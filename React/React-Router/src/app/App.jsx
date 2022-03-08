import React, { useReducer, useState } from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'

function Welcome(){
    return<div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div> 
    
}
function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }
const User = {
    name : String,
    count : Number
}

function Home(props){
    const [name, setName] = useState("Spencer");
    console.log(props)
    return <>
        <button onClick={()=>{props.dispatch({type: "increment"})}}>Add one</button>
        <h1>Hello from {name} {props.value.count.count}</h1>
    </>
}
function Blogs(){
    return <h1>Hello from Webpack Blogs</h1>
}
function Element(){
    const [count, dispatch] = useReducer(reducer, {count : 0});

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome />}>
                      <Route index element={<Home value = {count} dispatch = {dispatch}/>} />
                      <Route path="/blogs" element={<Blogs />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
    
ReactDOM.render(<Element></Element>, document.getElementById("root"));
