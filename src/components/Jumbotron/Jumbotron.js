import React from 'react'
import Nav from '../Nav/Nav'
import styles from './jumbotron.module.css'

const Jumbotron = () => {
    return (
        <div className={styles.wrapper}>
            <Nav />
            <h1 className={styles.h1}>Jessica Taylor</h1>
            <hr />
            <h3>Web Design & Development</h3>
            <button>Lets Chat!</button>
        </div>
    )
}

export default Jumbotron