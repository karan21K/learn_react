import React from 'react'

const LearnMap = () => {
    const names = ['karan','John','Bob','David']
  return (
    <>
    <h1>Map Function</h1>
    {names.map((name,index) => (
        <li key={index}>{name}</li>
    ))}
    </>
  )
}

export default LearnMap