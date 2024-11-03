import React, { useEffect, useState } from 'react'

export const LearnUseEffect = () => {
    const [count, setCount] = useState(0)
    const [randomNum, setRandomNumber] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 100)
        setRandomNumber(randomNum)
    }

    useEffect(() => {
        console.log("use effect is called")
        //cleanup function
        return () => {
            console.log("Cleanup function is called")
        }
    },[count])
  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}>Increase Count</button>
        <hr />
        <h1>Random Number: {randomNum}</h1>
        <button onClick={generateRandomNumber}>Generate Number</button>
    </>
  )
}
