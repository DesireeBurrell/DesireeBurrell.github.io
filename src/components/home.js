import React from 'react'
import {Link}from 'react-router-dom'
import me from "./13DB9B5D-95C5-48F9-AC31-39B1C8A4C899_1_105_c.jpeg"
function Home() {
    return (
        <div className='container'>
            <div className='link'>    
            <Link to ='/'> Home-</Link>
            <Link to ='/projects'>Projects-</Link>
            <Link to ='/about'>About Me-</Link>
            <Link to ='/contact'>Contact Me</Link>
            </div>
            <img src = {me} style={{width: '400px'}}/>
            <div className='msg'>
                Hello, my name is Desiree Burrell
                This is my React 

            </div>
        </div>
    )
}

export default Home
