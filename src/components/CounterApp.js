import React, { useState } from 'react'


const CounterApp=(props)=>{
  const [count, setCount ] = useState(props.count || 3)
  const [text, setText ] = useState('test')

  return (
    <div >
      <p>This is the {text || 'count'} :{count}</p>
      <button onClick={()=>setCount(count -1)}>-1</button>
      <button onClick={()=>setCount(count +1)}>+1</button>
      <button onClick={()=>setCount(props.count || 3)}>Reset</button>
      <input value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
  );
}


export default CounterApp;