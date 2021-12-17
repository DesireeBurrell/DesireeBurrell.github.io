import React from 'react'
import {Link}from 'react-router-dom'
function Contacts() {
    return (
        <div>
            <div className='link'>    
            <Link to ='/'> Home-</Link>
            <Link to ='/projects'>Projects-</Link>
            <Link to ='/about'>About Me-</Link>
            <Link to ='/contact'>Contact Me</Link>
            </div>
            <div className='msg'>
                You can find me here...
            </div>
        </div>
    )
}

export default Contacts
