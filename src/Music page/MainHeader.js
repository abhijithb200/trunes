import React from 'react'
import './MainHeader.css'


function MainHeader({head}) {
    
    return (
        <div className="mainheader">
            
            <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/music-icon-mohammed-jabir-ap.jpg"/>
            <h2>{head}</h2>
            {/* <p>Global</p> */}
            <div className="footermain">
          
            </div>
        </div>
    )
}

export default MainHeader
