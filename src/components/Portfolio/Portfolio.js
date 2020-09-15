import React from 'react'
import PortfolioPiece from './PortfolioPiece'
import { portfolioData } from '../../data'

const Portfolio = () => {
    return (
        <div id="portfolio">
            {portfolioData.map((data, index) => {
                return (
                    <PortfolioPiece
                        key={index}
                        id={data.id} 
                        image={data.image} 
                        quote={data.quote} 
                        author={data.quoteAuthor} 
                        text={data.text} 
                        tech={data.tech} 
                        count={index} 
                        heading={data.heading} />
                )
            })}
        </div>
    )
}

export default Portfolio