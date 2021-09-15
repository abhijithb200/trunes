import React,{useEffect,useState} from 'react'
import MainHeader from './MainHeader'
import './Main.css'
import MainBody from './MainBody'
import YouTube from 'react-youtube';
import axios from 'axios';
import { useParams } from 'react-router-dom'


function Main() {
    const [playlist,setPlaylist] = useState([]);
    const [songs,setSongs] = useState([]);
    let { playlistId,head } = useParams();
    useEffect(() => {
        let idurl = ""
        let fullurl=""
        if(playlist){
            
            playlist.forEach((element,index) => {
                if(index < 50){
                    idurl +="&id="+element;
                }
            });
            fullurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet${idurl}&key=AIzaSyDgxZRqDFz46yv1IUTmZOB0BBLeVuV-oo4`;
            
            
            axios.get(fullurl).then(res => {
              setSongs(res.data.items);
              
            })

        }
    }, [playlist])

    const opts = {
        height: "0",
        width: "0",
        playerVars: {
          autoplay: 0,
        }
      };
  
    const onReady = event => {     
          
        event.target.cuePlaylist({
          listType: 'playlist',
          list: playlistId,
      });
    }
    const statech = event=>{
         
        if (event.data == YouTube.PlayerState.CUED) {
          setPlaylist(event.target.getPlaylist())
      }
        
    }

    return (
        <div className="main">
            <img className="playerbody__logo main__logo" src="https://i.ibb.co/7yGch7R/trunes-logo-removebg-preview.png" alt="trunes-logo-removebg-preview" border="0"/>
            <MainHeader head={head}/>
            <MainBody songs={songs}/>
            
            <YouTube
        className="mainplayer"
        opts={opts}
        onReady={onReady}
        onStateChange={statech}
      />
            
        </div>
    )
}

export default Main
