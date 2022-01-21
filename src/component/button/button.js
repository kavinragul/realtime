import React,{useState} from 'react';

export default function Button() {

 const [count,setCount]=useState(0)

  const increment =()=>{
    setCount( count +1)
  }
  return (
      <div>
          <div>counter component</div>
          <div> you clicked {count}</div>
          <div>
            <button onClick={increment}>
              Increase
            </button>
          </div>
      </div>
  )
  
}
