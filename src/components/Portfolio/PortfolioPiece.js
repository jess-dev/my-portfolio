import React from 'react'
import styles from './Portfolio.module.css'

const PortfolioPiece = (props) => {
    let imgClass = styles.imgOdd;
    let txtClass = styles.txtOdd;
    let techLength = props.tech.length;

    if(props.count === 0 || ((props.count % 2) === 0)) {
        imgClass = styles.imgEven
        txtClass = styles.txtEven
    }

    return (
        <div className={styles.portfolioItem} key={props.id}>
            <img 
                className={imgClass}
                alt="Portfolio piece"
                src={props.image} />
            <div className={txtClass}>
                <h3>{props.heading}</h3>
                <p>{props.text}</p>
                <p>
                    {props.tech.map((data, i) => {
                        return (
                            <span key={i}>
                                {techLength === i + 1 ? data : data + " | "}
                            </span>
                        )
                    })}
                </p>
            </div>
        </div>
    )
}

export default PortfolioPiece