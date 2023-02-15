import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './index.css'
import { useHistory } from 'react-router-dom'

const SignUp = (props) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrMessage] = useState('')
  const [toggle, setToggle] = useState(false)
  const history = useHistory()


  const submitForm = async (event) => {
    event.preventDefault()
    const url = 'https://registrationapi-z2hj.onrender.com/'
    const userDetails = {
      id: uuidv4(),
      name: name,
      password: password,
      email: email
    }
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    }
    const response = await fetch(url, options)
    console.log(props)

    if (response.ok === true) {
      history.push('/login')
      // if (response.status === 200) {
       
      // }
    }
    else {
      setErrMessage('User Not register')
      setToggle(true)
    }
  }



  // console.log(typeof (status))
  return (
    <div className='Register-form-container'>
      <form autoComplete="off" onSubmit={submitForm} className="r-form">
        <h4 className='loginPage-title'>Register Form</h4>
        <label htmlFor='email'>UserName</label>
        <div className='input-card'>
          <input id='email' type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
          <p className='icons' ></p>
        </div>&nbsp; <br /> <br /><label htmlFor='email'>Email</label>
        <div className='input-card'>
          <input id='email' type="text" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <p className='icons' ></p>
        </div>&nbsp; <br /> <br />
        <label htmlFor='Mailpassword'>password</label>
        <div className='input-card'>
          <input id='Mailpassword' type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
          <p className='icons'></p>
        </div>&nbsp; <br /> <br />
        <button type='submit' className='login-btn'>Register</button>
        {toggle && <p className='error-message'>{errorMessage}</p>}
      </form>
    </div>
  )
}
export default SignUp