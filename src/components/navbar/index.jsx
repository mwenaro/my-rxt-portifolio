import React from 'react';
import "./navbar.css"

function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#experience">Projects</a></li>

                <li><a href="#test">Testimonials</a></li>
                <li><a href="#">Contact</a></li>

            </ul>
        </nav>

    )
}

export default Navbar