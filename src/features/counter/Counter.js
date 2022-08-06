import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { 
  increment, 
  decrement, 
  reset, 
  incrementByAmount 
} from './counterSlice'
import { useState } from 'react'

const Counter = () => {
  // useSelector gets any state in the store 
  const count = useSelector((state) => state.counter.count)
  // useDispatch is used to dispatch an action
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0)

  const addValue = Number(incrementAmount) || 0

  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }

  return (
    <section>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <input
        type='text'
        value ={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
       />

       <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
       </div>
      
    </section>
  )
}

export default Counter