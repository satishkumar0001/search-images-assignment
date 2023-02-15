
import React, { useState } from 'react'
import './index.css'
import { Link, Redirect } from 'react-router-dom'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [errorMsz, setErrorMsz] = useState(false)


  const onSubmitUserDetails = async event => {
    
    event.preventDefault()
    const userApi = 'https://registrationapi-z2hj.onrender.com/login'
    const userDetails = {
      email: email,
      password: password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    }
    const response = await fetch(userApi, options)
    const data = await response.json()
    if (data.status === true) {
      localStorage.setItem("id", data.id)
      localStorage.setItem("status", true)
      setErrorMsz('')
      const { history } = props
      history.replace("/")
    } else {
      setErrorMsz(data.msg)
      // setErrorMsz(true)
    }
  }
  const getId = localStorage.getItem("id")
  if (getId !== null) {
    return <Redirect to="/" />
  }

  const onChangeUsername = event => {
    setEmail(event.target.value)
  }

  const onChangePassword = event => {
    setpassword(event.target.value)
  }
  return (
    <div className='login-container'>
      <form className='login-sub-container' onSubmit={onSubmitUserDetails}>
        <h1 className='login-main-heading'>Login</h1>
        <label htmlFor='username' className='labele-heading'>Email</label>
        <input onChange={onChangeUsername} value={email} id='username' className='input-container' type="text" placeholder="Enter Your email" />
        <label htmlFor='password' className='labele-heading'>Password</label>
        <input onChange={onChangePassword} value={password} id='password' className='input-container' type="password" placeholder="Enter Your Password" />
        <button className='btn' type='submit'>Login</button>
        {errorMsz && <p className='error'>*{errorMsz}</p>}
        <Link to={`/signup/${true}`}>
          <p className='create-account-para'>Don't have Account </p>
        </Link>
      </form>
        

    </div>
  )
}
export  default Login