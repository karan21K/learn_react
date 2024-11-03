import React, { useState } from 'react'

const LearnForms = () => {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    // const handleFirstName = (e) => {
    //     setFirstName(e.target.value)
    // }

    // const handleLastName = (e) => {
    //     setLastName(e.target.value)
    // }

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted', formData)
    }
  return (
    <>
    
    {/* <form action="">
        First name: <input type="text" name='firstName' onChange={handleFirstName} value={firstName} /><br /><br />
        Last name: <input type="text" name='lastName' onChange={handleLastName} value={lastName} />
    </form> */}

    <form action="" onSubmit={handleFormSubmit}>
        First name: <input type="text" name='firstName' onChange={handleChange} value={formData.firstName} /><br /><br />
        Last name: <input type="text" name='lastName' onChange={handleChange} value={formData.lastName} /><br /><br />
        <input type="submit" value="submit" />
    </form>

    </>
  )
}

export default LearnForms