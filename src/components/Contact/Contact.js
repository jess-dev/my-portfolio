import React from 'react'
import { IconContext } from "react-icons";
import { FaLinkedin, FaInstagramSquare, FaGithub, FaTwitter } from 'react-icons/fa'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div id="contact" className={styles.contact}>
            <div className={styles.chat}>
                <h2>Lets have a chat!</h2>
                <h3><a href="mailto:jessicatee84@gmail.com">jessicatee84@gmail.com</a></h3>
            </div>
            <div className={styles.socials}>
                <IconContext.Provider value={{color: "#322a60", size: "3.5em", verticalAlign: "middle"}}>
                    <ul>
                        <a href="https://www.linkedin.com/in/jessica-taylor-b223281b/" target="_blank" rel="noreferrer"><li><FaLinkedin /><span>LinkedIn</span></li></a>
                        <a href="https://www.instagram.com/jesstaylor.dev/" target="_blank" rel="noreferrer"><li><FaInstagramSquare /><span>Instagram</span></li></a>
                        <a href="https://github.com/jess-dev" target="_blank" rel="noreferrer"><li><FaGithub /><span>Github</span></li></a>
                        <a href="https://twitter.com/jesstaylor_dev" target="_blank" rel="noreferrer"><li><FaTwitter /><span>Twitter</span></li></a>
                    </ul>
                </IconContext.Provider>
            </div>
        </div>
    )
}


export default Contact