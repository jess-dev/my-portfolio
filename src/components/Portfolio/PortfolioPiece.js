import React from 'react'
import gatsby from 'gatsby'

const PortfolioPiece = () => {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <div style={{
            width: '100%',
        }} >
            <img style={{
                width: '50%',
                display:"inline-block"
            }} 
            src="https://via.placeholder.com/250" />
            <div style={{
                width: '50%',
                display:"inline-block"
            }} >
                <h3>Portfolio Title</h3>
                <p>{lorem}</p>
            </div>
        </div>
    )
}

export default PortfolioPiece