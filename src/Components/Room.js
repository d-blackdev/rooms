import React from 'react'
import { NavLink } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'
function Room({ images,name,slug,price }) {

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single-room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <NavLink to={`/rooms/${slug}`} className="btn-primary room-link">features</NavLink>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

export default Room

Room.propTypes = { 
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
 }
