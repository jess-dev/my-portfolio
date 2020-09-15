import React from 'react'
import styles from './AboutMe.module.css'

const AboutMe = () => {
    const about = "I create beautiful spaces on the web for anybody wanting to increase awareness of their services, bring themselves to a wider audience or improve their customer's experience. I love to code and have a thirst for self improvement and learning, constantly tinkering and learning the latest tech. I'm employed full time as a software developer, but always open to freelance web projects to do in my spare time. Outside of tech I love to play football and can be found most sunday afternoons getting wet and muddy playing for Corby Town Ladies."
    return (
        <div id="about" className={styles.aboutme}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.content}>
                <img src="https://res.cloudinary.com/dck40m3wf/image/upload/v1599316312/about-me_lcnpjq.jpg" alt="My beautiful self" />
                <div className={styles.bio}>
                    <p>{about}</p>
                    <p>If you would like to talk about a project you have in mind, please get in touch via email, or through social media</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe