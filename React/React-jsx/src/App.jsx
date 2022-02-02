import { useState  } from "react";
import ReactDOM from "react";

function Welcome(){
    return <Class>Hello from App.jsx</Class>
}

function Class(){
    console.log("class");
    const [count, setCount]= useState(0);
    function handleClick(){
        setCount(count+1);
    }
    return(
           <>
              <h1>Spencer</h1>
          </>
      )
  } 

const element = <Welcome></Welcome>;
    
ReactDOM.render(element, document.getElementById('root'));