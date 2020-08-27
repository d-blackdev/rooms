import React from 'react'
import Room from './Room'

function RoomsList({ rooms }) {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
        <section className="roomsList">
            <div className="roomslist-center">
                {
                    rooms.map(item => {
                        return <Room key={item.id} {...item}/>
                    })
                 }
            </div>
        </section>
    )
}

export default RoomsList
