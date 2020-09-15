import React from 'react'
import styles from './Jumbotron.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Jumbotron = () => {
    return (
        <div id="#home" className={styles.wrapper}>
            <div className={styles.masthead}>
                <h1 className={styles.title}>Jessica Taylor</h1>
                <hr />
                <h3 className={styles.subtitle}>Web Design <span className={styles.highlight}>&</span> Development</h3>
                <button className={styles.cta}><AnchorLink href="#contact">Lets Chat!</AnchorLink></button>
            </div>
        </div>
    )
}

export default Jumbotron