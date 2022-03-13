import React from 'react'
import Cards from '../Cards/Cards'
import "./section.css"
function Section() {
    return (
        <div class="section">
            <div class="topmenu">
                <div class="left">
                    <span>Nearest rides</span>
                    <span>Upcoming rides</span>
                    <span>Past rides</span>
                </div>
                <div class="right">
                <img src="https://img.icons8.com/metro/26/ffffff/sorting-answers.png"/>
                    <span>Filters</span>
                </div>

            </div>
            <Cards class="card" />
            <br/>
            
            


        </div>
    )
}

export default Section