import React from 'react'
import gatsby from 'gatsby'
import { FaBeer } from 'react-icons/fa';

const Card = () => {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt, purus a tristique scelerisque, nibh eros auctor quam, id pretium mauris erat eget lectus. Donec viverra consectetur nisi in porta. Sed vel lectus vel lectus ultrices consectetur. Sed dignissim sapien est, eget rutrum felis dignissim eu. Aenean semper nec orci quis interdum. Quisque sit amet arcu lorem. Etiam tellus libero, auctor ac augue vulputate, condimentum auctor magna."
    return (
        <div style={{
            display: 'inline-block',  
            width: '33%'
        }}>
            <FaBeer />
            <h2>Subtitle</h2>
            <p>{lorem}</p>
        </div>
    )
}

export default Card