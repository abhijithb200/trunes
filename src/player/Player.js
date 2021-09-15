import React from 'react'
import './Player.css'
import PlayerBody from './PlayerBody'
import PlayHeader from './PlayHeader'
import { useLocation } from "react-router-dom";
 


export default function Player() {
    const location = useLocation();

    return (
        <div className="player">
            {/* <PlayHeader/> */}
            {/* <h1 className="player__name">TRUNES</h1> */}
            <PlayerBody ind={location?.state?.detail}/>
        </div>
    )
}
