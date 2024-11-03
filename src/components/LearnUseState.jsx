import React, { useState } from 'react'

const LearnUseState = () => {
    const [num, setNum] = useState(5)
    console.log(num)

    const handleNum = () => {
      setNum(10)
    }

    const [stockprice, setStockPrice] = useState({stock: 'Apple', Price: 100})
    console.log(stockprice)

    const updateStockPrice = () => {
      setStockPrice({...stockprice, Price: 200})
    }
  return (
    <>
    <h2>Number: {num}</h2>
    <button onClick={handleNum}>Click here</button>
    <hr />
    <h2>{stockprice.stock}:{stockprice.Price}</h2>
    <button onClick={updateStockPrice}>Click here</button>
    </>
  )
}

export default LearnUseState