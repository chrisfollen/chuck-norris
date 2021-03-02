import React from 'react'
import walkerFace from "../assets/walker_face.png"
import texasSun from "../assets/texas_sun.png"

export default function Sun() {
    return (
        <div id="sun">
            <img className="walker-face" src={walkerFace} alt="Chuck Norris Face"></img>
            <img className="texas-sun" src={texasSun} alt="Texas Sun"></img>
        </div>
    )
}
