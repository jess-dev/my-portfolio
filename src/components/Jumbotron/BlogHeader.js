import React from 'react'
import styles from './BlogHeader.module.css'
import { IconContext } from "react-icons";
import { FaLinkedin, FaInstagramSquare, FaGithub, FaTwitter } from 'react-icons/fa'

const BlogHeader = () => {
    return (
        <div id="#home" className={styles.blogWrapper}>
            <div className={styles.blogMasthead}>
                <h1 className={styles.blogTitle}>Jessica Taylor</h1>
                <hr className={styles.blogDivider} />
                <h3 className={styles.blogSubtitle}>Web Design <span className={styles.blogHighlight}>&</span> Development</h3>
                <IconContext.Provider value={{color: "white", size: "1.75em", verticalAlign: "middle"}}>
                        <ul className={styles.socials}>
                            <a href="https://www.linkedin.com/in/jessica-taylor-b223281b/" target="_blank" rel="noreferrer"><li><FaLinkedin /></li></a>
                            <a href="https://www.instagram.com/jesstaylor.dev/" target="_blank" rel="noreferrer"><li><FaInstagramSquare /></li></a>
                            <a href="https://github.com/jess-dev" target="_blank" rel="noreferrer"><li><FaGithub /></li></a>
                            <a href="https://twitter.com/jesstaylor_dev" target="_blank" rel="noreferrer"><li><FaTwitter /></li></a>
                        </ul>
                    </IconContext.Provider>
            </div>
        </div>
    )
}

export default BlogHeader