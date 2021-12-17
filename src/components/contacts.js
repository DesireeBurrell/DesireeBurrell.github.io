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
                You can find me here... <br/>
                Email: Desireeburrell333@gmail.com <br/>
                Contact Form: <br/>
                Name: 
                <input type="text">
                    </input> <br/>
                Email: 
                <input type="text">
                    </input>    <br/>
                Message:
                <input type="text">
                    </input><br/>

                <button>
                    submit
                    </button>
            </div>
        </div>
    )
}

export default Contacts
