import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const add = ()=>{
    setCount(count+1)
  }
  const minus = ()=>{
    setCount(count-1)
  }
  return (
    <>
    <p>{count}</p>
    <button onClick={add}>add</button>
    <button onClick={minus}>minus</button>
    </>
  );
}

export default App;
