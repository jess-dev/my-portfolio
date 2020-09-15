import React from 'react'
import Card from './Card'
import styles from './WhatIDo.module.css'
import {cardData} from '../../data'

const WhatIDo = () => {
    return (
        <div>
            <h2 className={styles.sectionTitle}>What I Do</h2>
            <div className={styles.section}>
            {cardData.map((data, key) => {
                return (
                    <Card key={key} subtitle={data.subtitle} icon={data.icon} text={data.text} cta={data.cta} />
                )
            })}
            </div>
        </div>
    )
}

export default WhatIDo