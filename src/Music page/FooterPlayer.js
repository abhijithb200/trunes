import React,{useState,useEffect} from 'react'
import './FooterPlayer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import Video from '../home/Audiotest'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { useHistory } from "react-router-dom";

function FooterPlayer({name,singer,id,ind}) {
    const [isPaused, setIsPaused] = useState(false);
    let history = useHistory();

    useEffect(() => {
        setIsPaused(false);
    },[id])
    const togglePause = () => {
      console.log("togglePause");
      setIsPaused(!isPaused);
    };
    function handleClick() {
        history.push({
            pathname:`/abc`,
            state:{detail:ind}
        });
      }
    return (
        <div className="footerplayer">
            <div className="footerplayer__left">
                <div className="footerplayer__left1" >
                <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/music-icon-mohammed-jabir-ap.jpg"/>
                <div className="footerplayer__texts">
                    <h4>{name}</h4>
                    <p>{singer}</p>
                    </div>
                </div>
                <div className="footerplayer__right">
                    {
                        isPaused? (<PlayCircleOutlineIcon onClick={togglePause} fontSize="large" className="footer__green"/>):(
                            <PauseCircleOutlineIcon  onClick={togglePause} fontSize="large" className="footer__green"/>
                        )
                    }
                        
                        
                </div>
                <div className="footerplayer__youtube">
                <Video isPaused={isPaused} songId={id}/>
                </div>
                
            </div>
        </div>
    )
}

export default FooterPlayer
