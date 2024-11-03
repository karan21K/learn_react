import React from 'react'
import useCounter from '../hooks/useCounter'

const LearnCustomHook = () => {
    const { count, increment, decrement, reset } = useCounter(5)
  return (
    <>
        <h1>Custom Hook</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>reset</button>
    </>
  )
}

export default LearnCustomHook