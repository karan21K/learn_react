import React, { useState } from 'react'

const LearnConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [status, setStatus] = useState(true)
  return (
    <>
        <h1>Conditional Rendering</h1>
        { isLoggedIn ? (
            <h3>Welcome, User!</h3>
        ) : (
            <h3>Please login</h3>
        )}

        {status && (
            <h3>Show Data</h3>
        )}
    </>
  )
}

export default LearnConditionalRendering