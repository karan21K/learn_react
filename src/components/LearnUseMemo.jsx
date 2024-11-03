import { useMemo, useState } from 'react'

const LearnUseMemo = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(1000000)

    const increaseCount = () => {
        if(count === 10){
            setNumber(999999)
        }
        setCount(count + 1)
    }


    const sumOfNumbers = useMemo(() => {
        let sum = 0
        for(let i=0; i<=number; i++){
            sum = sum + i
        }
        return sum
    },[number])

    console.log(`Sum of numbers 1 to ${number}:`, sumOfNumbers)
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
    </>
  )
}

export default LearnUseMemo