import React from 'react'
import "./cards.css"

function Cards() {
    return (
        <div class="card">
            <div class="wrapper1">
                <img src="Images/map.png" />
                <div class="details">
                    <span>Ride Id:</span>
                    <span>Origin Station:</span>
                    <span>station_path:</span>
                    <span>Date:</span>
                    <span>Distance:</span>
                </div>
                <div class="filterdata">
                    <div class="button">City Name</div>
                    <div class="button">State Name</div>

                </div>
            </div>

        </div>
    )
}

export default Cards