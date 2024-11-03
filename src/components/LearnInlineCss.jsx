import React from 'react'
import '../assets/CSS/style.css'

const LearnInlineCss = () => {
    const style = {
        container: {
            backgroundColor: 'red',
            height: '100px',
            width: '100px',
        },

        h2Text: {
            fontSize: '40px',
            color: '#00ff00',
        }
    }
  return (
    <>
    <style>
        {`
            .container{
                background-color: #00ff00;
                height: 100px;
                width: 100px;
            }
        `}
    </style>
    <h1>Inline CSS</h1>
        <p style={{ fontSize: '20px', fontWeight: 600, color: 'red' }}>Hello, this is a paragraph</p>

        <div style={style.container}>

        </div>

        <h2 style={style.h2Text}>Test H2 Element</h2>
        <hr />
        <h2>Internal CSS</h2>

        <div className='container'>

        </div>
        <hr />

        <h2>External CSS</h2>
        <div className="yellowbox">

        </div>
        <h2 className="yellowtext">Yellow Text</h2>
    </>
  )
}

export default LearnInlineCss