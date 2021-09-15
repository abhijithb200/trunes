import React from 'react'
import './Header.css'

export default function Header({music}) {
    return (
    
        <div>
{
    !music ? (<div className="header">
    <img src="https://i.ibb.co/c8WGXXZ/Add-a-subheading-2.png" alt="Add-a-subheading-2" border="0"/>        
    
    </div>):(<div className="header__2"><p>TRUNES</p></div>)
}
        
        </div>
    )
}
