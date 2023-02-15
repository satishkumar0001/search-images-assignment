import React, { useEffect, useState } from 'react';
import Gallery from '../Gallery';
import './index.css'

const Home = (props) => {
  const [data, setData] = useState([]);
  const [FilterdImages, setFilteredImages] = useState(data)

  const submitHandler = async () => {
    const url = `https://api.pexels.com/v1/curated`
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      setData(data.photos)
    }
  }

  useEffect(() => {
    submitHandler()
  }, [])

  useEffect(() => {
    console.log(FilterdImages)
  }, [FilterdImages])

  const logoutbtn = () => {
    localStorage.removeItem("id")
    const { history } = props
    history.replace('/login')
  }
  const changeHandler = e => {
    setFilteredImages(data.filter(image => image.photographer.toLowerCase().includes(e.target.value.toLowerCase())))
    
  }

  return (
    <div>
      
      <center>
        <div className='home'>
          <h2 className='heading'>Search images</h2>

          <div className='form-container'>
            <form className="form">
              <input type="text" onChange={changeHandler} placeholder="Search Anything..." className='input' />&nbsp;&nbsp;
            </form>
            <button onClick={logoutbtn}>Logout</button>
          </div>
        </div>

        {data.length >= 1 ? <Gallery data={FilterdImages} /> : <h4>WelCome...</h4>}
      </center>
    </div>
  )
}

export default Home