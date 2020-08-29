import React from 'react'
import gatsby from 'gatsby'

const AboutMe = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <div>
            <h2>About Me</h2>
            <img style={{
                width: '50%',
                display:"inline-block"
            }} src="https://via.placeholder.com/250" />
            <p style={{
                width: '50%',
                display:"inline-block"
            }}>{lorem}</p>
        </div>
    )
}

export default AboutMe