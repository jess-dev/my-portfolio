import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import BlogHeader from './BlogHeader'
import styles from './Jumbotron.module.css'

const Jumbotron = (page) => {
    console.log(page)
    if (page !== "/blog") {
    return (
        <div id="#home" className={styles.wrapper}>
            <div className={styles.masthead}>
                <h1 className={styles.title}>Jessica Taylor</h1>
                <hr className={styles.divider} />
                <h3 className={styles.subtitle}>Web Design <span className={styles.highlight}>&</span> Development</h3>
                <button className={styles.cta}><AnchorLink href="#contact">Lets Chat!</AnchorLink></button>
            </div>
        </div>
    )} else {
        return (
            <BlogHeader />
        )
    }
}

export default Jumbotron