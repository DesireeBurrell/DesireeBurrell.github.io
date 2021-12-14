import React from 'react'
import {Link}from 'react-router-dom'
function Home() {
    return (
        <div className='container'>
            <div className='link'>    
            <Link to ='/'>Home</Link>
            <Link to ='/projects'>Projects</Link>
            <Link to ='/about'>About Me</Link>
            <Link to ='/contact'> Contact Me</Link>
            </div>
        </div>
    )
}

export default Home
