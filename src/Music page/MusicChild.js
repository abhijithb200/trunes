import React from 'react'
import './MusicChild.css'

function MusicChild({name,singer,func,id,ind}) {

    
    return (
        <div className="musicChild" onClick={()=>func(name,singer,id,ind)}>
            <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/music-icon-mohammed-jabir-ap.jpg"/>
            <div className="musicChild__texts">
                <h1>{name}</h1>
                <p>{singer}</p>    
            </div> 

        </div>
    )
}

export default MusicChild
