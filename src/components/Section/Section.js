import React, { useState,useEffect } from 'react'
import Cards from '../Cards/Cards'
import "./section.css"
import axios from 'axios';


function Section() {
    const [show,setShow]=useState(false)
    
    const [state,setState]=useState("Nearest rides")
    const [apiData, setApiData] = useState([])

    function distance(station_path) {
        const dist = station_path.map(value => (Math.abs(40 - value))).sort((a, b) => a - b
        )[0]
        return dist
    }

    useEffect(() => {
        axios
            .get('https://assessment.api.vweb.app/rides')
            .then(response => {
                console.log(response.data)
                response.data.map(obj => {
                    obj.distance = distance(obj.station_path);
                    return obj
                })

                // console.log(arr)
                
                return setApiData(response.data.sort((a,b) => a.distance - b.distance))
            })
    }, []);

    // useEffect(() => {
    //     // if(state === 'Nearest rides'){
    //         // console.log("njan ivide aan go;ys", apiData[0].distance)
    //         setApiData(apiData.sort( (a,b) => a.distance - b.distance))
    //     // }ff
    // },[state])



    return (
        <div class="section">
            <div class="topmenu">
                <div class="left">
                    <span onClick={ ()=>setState("Nearest rides")}>Nearest rides</span>
                    <span onClick={ ()=>setState("Upcoming rides")}>Upcoming rides</span>
                    <span onClick={ ()=>setState("Past rides")}>Past rides</span>
                </div>
                 
                <div class="right" >
                    <img onClick={()=>setShow(!show)} src="https://img.icons8.com/metro/26/ffffff/sorting-answers.png" />
                    <span onClick={()=>setShow(!show)}>Filters</span>
                    {
                        show?
                        <div class="drop" >
                        <span>Filters</span>
                        <span></span>
                        <div class="state">
                            <span>State</span>
                            <img src="https://img.icons8.com/material/24/ffffff/give-way--v1.png" />
                        </div>
                        <div class="city">
                            <span>City</span>
                            <img src="https://img.icons8.com/material/24/ffffff/give-way--v1.png" />
                        </div>


                        </div>:null
                    }
                </div>

            </div>
            <Cards class="card" setApiData={setApiData} apiData={apiData} state={state}/>
            <br />




        </div>
    )
}

export default Section