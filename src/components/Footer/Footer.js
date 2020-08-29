import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li>About Me</li>
                <li>My Work</li>
                <li><Link to={'/blog'}>Blog</Link></li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Footer