import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

export default function App() {
  
  const counter = useSelector(state => state.counterReducer)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <p>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </p>
    </div>
  );
}
