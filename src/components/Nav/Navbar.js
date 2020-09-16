import React from 'react'
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from  './Navbar.module.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const handleNavCollapse = () => {
        var nav = document.querySelector('#topLinks')
        nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
    }

    return (
        <nav className={styles.toplinks}>
            <button className={styles.toplinksToggle} data-toggle="collapse" onClick={handleNavCollapse} aria-controls="topLinks" data-target="#topLinks" >
                <IconContext.Provider value={{size: "1.5em"}}>
                    <FaBars />
                </IconContext.Provider>
            </button>
            <ul id="topLinks" className={styles.toplinksItems}>
                <li><Link to={'/'}>Home</Link><span className={styles.spacer}>|</span></li>
                <li><AnchorLink href="#about">About Me</AnchorLink><span className={styles.spacer}>|</span></li>
                <li><AnchorLink href="#portfolio">My Work</AnchorLink><span className={styles.spacer}>|</span></li>
                <li><Link to={'/blog'}>Blog</Link><span className={styles.spacer}>|</span></li>
                <li><AnchorLink href="#contact">Contact</AnchorLink></li>
            </ul>
        </nav>
    )
}

export default Navbar