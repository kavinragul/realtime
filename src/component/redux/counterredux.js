import React, { useState,useEffect } from 'react';
import { decrement, increment } from './counteraction';
import { store } from './storeone';

export default function CounterRedux() {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        update();
        store.subscribe(update)
    })

    function update(){
        const state=store.getState();
        setCount(state.counter)
    }

    function onIncrement(){
        store.dispatch(increment())
    }

    function onDecrement(){
        store.dispatch(decrement())
    }
    console.log(count);
  return <div>
      <div>{count}</div>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>Decrement</button>
  </div>;
}

    


