import React from 'react'
import './LanguageCard.css'
import { Link } from 'react-router-dom'


export default function LanguageCard({lang,imgURL,srcId}) {
    return (
        <>
        {
            srcId?
            (<a href={`/${srcId}/${lang}`}><div className="language-card" style={{background:`url(${imgURL})`,backgroundSize:'cover'}}>
            <h3>{lang}</h3>
            
        </div></a>):(<div onClick={()=>alert('Hold on! We are working on it.GO for malayalam')} className="language-card" style={{background:`url(${imgURL})`,backgroundSize:'cover'}}>
            <h3>{lang}</h3>
            
        </div>)
        }
        
        </>
    )
}
