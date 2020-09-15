import React from 'react'
import { IconContext } from "react-icons";
import { GiPencilBrush, GiTerror } from 'react-icons/gi';
import { GoDeviceDesktop } from 'react-icons/go';
import { FaMobileAlt } from 'react-icons/fa'
import styles from './WhatIDo.module.css'

const Card = (props) => {
    let icon;
    switch(props.icon) {
        case "GiPencilBrush":
            icon = <GiPencilBrush />
            break;
        case "GoDeviceDesktop":
            icon = <GoDeviceDesktop />
            break;
        case "FaMobileAlt":
            icon = <FaMobileAlt />
            break;
        default:
            icon = <GiTerror />
    }

    return (
        <div className={styles.card}>
            <IconContext.Provider value={{color: "#262947", size: "4em"}}>
                <div>
                    {icon}
                </div>
            </IconContext.Provider>
            <h3 className={styles.cardTitle}>{props.subtitle}</h3>
            <p>{props.text}</p>
            <p>{props.cta}</p>
        </div>
    )
}

export default Card