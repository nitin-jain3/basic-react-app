import React from 'react'
import vg from '../assets/2.webp';

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>Tech base</h1>
        <p>Solution For Your Digital Problems</p>
      </main>
    </div>
    <div className='home2'>
      <img src={vg} alt="Graphics" />
      <div>
        <p> Only solution to tech problems. Leading company in our domain.</p>
      </div>
    </div>
    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>Just some people working for the betterment of the society and as well as you. Just a call away.</p>
      </div>
    </div>
    </>
  )
}

export default Home