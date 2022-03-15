import React, { useEffect, useState } from 'react'
import "./cards.css"

function Cards({ apiData }) {


    //const [filteredApiData,setFilteredApiData] = useState()


    // filter function setFilteredApiData(apiData.filter(e => e.city==props.city && e.state==props.state))

    //sorting function const array1 = [1, 30, 4, 21, 100000];

    // function sortcriteria (a,b) {
    //     return a-b }

    //     array1.sort(sortcriteria);
    //     console.log(array1);



    return (
        apiData ? apiData.map(e => <div class="card">
            <div class="wrapper1">
                <img src="Images/map.png" />
                <div class="details">
                    <span>Ride Id: {e.id}</span>
                    <span>Origin Station: {e.origin_station_code}</span>
                    <span>station_path: [{e.station_path.toString()}]</span>
                    <span>Date: {e.date}</span>
                    <span>Distance: {e.distance}</span>
                </div>
                <div class="filterdata">
                    <div class="button">City Name</div>
                    <div class="button">State Name</div>

                </div>
            </div>

        </div>) : null

    )
}

export default Cards