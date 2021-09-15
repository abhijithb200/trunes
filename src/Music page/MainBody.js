import React,{useState} from 'react'
import './MainBody.css'
import MusicChild from './MusicChild'
import FooterPlayer from './FooterPlayer'
import { CircularProgress } from '@material-ui/core';

function MainBody({songs}) {
    const [songDetails,setSongDetails] = useState([]);
    const playerHandle = (name,singer,id,ind)=>{
        setSongDetails({
            name:name,
            singer:singer,
            id:id,
            ind:ind
        })
    }
    
    return (
        <div className="mainbody">
          
            <div className="mainbody__musiclist">
                {
                    songs.map(((song,index)=>{
                        return(
                            <MusicChild key={song.id} ind={index} id={song.id} name={song.snippet.title} singer={song.snippet.author} func={playerHandle}/>
                        )
                    })) 
                }
                
            </div>
          {
              songDetails?.name && <div className="footplayer">
              <FooterPlayer ind={songDetails.ind} name={songDetails.name} singer={songDetails.singer} id={songDetails.id}/>
          </div>
          }
            
            
        </div>
    )
}

export default MainBody
