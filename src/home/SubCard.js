import React from 'react'
import './SubCard.css'
import { Link } from 'react-router-dom'

function SubCard({url,color,gradient,head,tail,srcId}) {

    return (
        <>
        {
            srcId?(
                <a href={`/${srcId}`}>
                <div className="subcard" style={{background: `url(${url})`,backgroundPosition: 'center',backgroundRepeat:'no-repeat'}}>
            <div className="subcard__text" style={{ backgroundColor: `${color}`,
    backgroundImage: `${gradient}`}}>
            <h1>{head}</h1>
            <hr></hr>
            <p>{tail}</p>
            </div>
            
        </div>
        </a>
            ):(
                <div onClick={()=>alert('Hold on!! we are working on it')} className="subcard" style={{background: `url(${url})`,backgroundPosition: 'center',backgroundRepeat:'no-repeat'}}>
                <div className="subcard__text" style={{ backgroundColor: `${color}`,
        backgroundImage: `${gradient}`}}>
                <h1>{head}</h1>
                <hr></hr>
                <p>{tail}</p>
                </div>
                
            </div>
            )
        }
        
        </>
    )
}

export default SubCard
