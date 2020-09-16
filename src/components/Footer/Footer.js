import React from 'react'
import { Link } from 'gatsby'
import styles from './Footer.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <ul className={styles.nav}>
                <li><AnchorLink href="/#home">Home</AnchorLink></li><span className={styles.spacer}>|</span>
                <li><AnchorLink href="#about">About Me</AnchorLink></li><span className={styles.spacer}>|</span>
                <li><AnchorLink href="#portfolio">My Work</AnchorLink></li><span className={styles.spacer}>|</span>
                {/* <li><Link to={'/blog'}>Blog</Link></li><span className={styles.spacer}>|</span> */}
                <li><AnchorLink href="#contact">Contact</AnchorLink></li>
            </ul>
            <p className={styles.copyright}>Copyright Jess Taylor Web Design 2020</p>
        </div>
    )
}

export default Footer