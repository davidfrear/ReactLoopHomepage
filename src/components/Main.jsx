import React from 'react'
import videoBg from '../assets/videoBg.mp4'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
       <video src={videoBg} autoPlay loop muted />
       <div className='content'>
           <h1>David Frear</h1>
           <br></br>
           <p>Welcome to my React JavaScript video looping homepage.</p>
       </div>
    </div>
  )
}

export default Main