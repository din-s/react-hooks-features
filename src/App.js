import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App=(props)=>{
  const [count, setCount ] = useState(props.count? props.count : 0)
  return (
    <div >
      <p>This is the count :{count}</p>
      <button onClick={()=>setCount(count -1)}>-1</button>
      <button onClick={()=>setCount(count +1)}>+1</button>
      <button onClick={()=>setCount(props.count? props.count :0)}>Reset</button>
    </div>
  );
}

export default App;
