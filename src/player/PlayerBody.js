import React,{useState,useEffect} from 'react'
import './PlayerBody.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import YouTube from 'react-youtube';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { useParams } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {useHistory} from "react-router-dom";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    width:"100%",
    height: 5,
    borderRadius: 90,
  },
  colorPrimary: {
    backgroundColor: 'grey',
  },
  bar: {
    borderRadius: 90,
    backgroundColor: 'white',
  },
}))(LinearProgress);


function PlayerBody({ind}) {
  const [colors, setColor] = useState('');
  const {playlistId,color} = useParams();
  useEffect(() => {
    setColor(color)
  },[])
    const history = useHistory();
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState();
    const [progress, setProgress] = useState(0);
    const [forward, setForward] = useState(true);
    const [backward, setBackward] = useState(true);
    const [cElement, setcElement] = useState();
    const [details,setDetails] = useState({});
    const CSS_COLOR_NAMES = [ "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen", ];




    const togglePause = () => {
        setIsPaused(!isPaused);
      };
      const toggleForward = () => {
        setForward(!forward);
        setProgress(0);
        const l = Math.floor(Math.random() * 148);
        setColor(CSS_COLOR_NAMES[l])
      };
      const toggleBackward = () => {
          setBackward(!backward);
          setProgress(0);
      }
    
    const opts = {
        height: "0",
        width: "0",
        playerVars: {
          autoplay: 0,
        }
      };
      useEffect(() => {
        if (cElement) {
          isPaused
            ? cElement.target.pauseVideo()
            : cElement.target.playVideo();
  
        }
        
      }, [isPaused]);

      useEffect(() => {
        if(cElement){
    cElement.target.nextVideo()
    if(isPaused){
        setIsPaused(false)
    }
    // event.target.setShuffle(true);
    cElement.target.setLoop(true);
        }
      }, [forward])

      useEffect(() => {
        if(cElement){
    cElement.target.previousVideo()
    if(isPaused){
        setIsPaused(false)
    }
    cElement.target.setLoop(true);
        }
      }, [backward])

      //time to second
    function formatTime(time){
        time = Math.round(time);
    
        var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60;
    
        seconds = seconds < 10 ? '0' + seconds : seconds;
    
        return minutes + ":" + seconds;
    }

      //timer display
      const updateTimerDisplay=(event) => {
        setTime(formatTime(event.target?.getCurrentTime()));
      }
      const onReady = event => {
        setcElement(event);        
      
        event.target.cuePlaylist({
          listType: 'playlist',
          list: 'PLOzDu-MXXLliO9fBNZOQTBDddoA3FzZUo',
          index:ind,
      });
     
      setInterval(function () {
         updateTimerDisplay(event);
         setProgress(event.target?.getCurrentTime() / event.target?.getDuration()*100)
        // updateProgressBar();
    }, 1000)
    
      };

      const statech = event=>{
        if (event.data == YouTube.PlayerState.CUED) {
          console.log(event.target.getPlaylist());
      }
      
      // console.log(event.target)
      // console.log(event.target.playerInfo.videoData?.title)
      
      setDetails({
          name: event.target.playerInfo.videoData?.title,
          author: event.target.playerInfo.videoData?.author,
      })
     
      }

    return (
        <div className="playerbody" style={{backgroundImage:`linear-gradient(198deg, ${colors} 0%, #000000 100%)`}}>
 
          <ArrowBackIosIcon className="player__back" onClick={() => history.push('/')}/>
          <img className="playerbody__logo" src="https://i.ibb.co/7yGch7R/trunes-logo-removebg-preview.png" alt="trunes-logo-removebg-preview" border="0"/>

        <div className="playerbody__youtube">
        <YouTube
        className="mainplayer"
        opts={opts}
        onReady={onReady}
        onStateChange={statech}
      />
        </div>
               
            <div className="playerbody__center">
            <h3>{details?.name}</h3>
                <p>{details?.author}</p>
                <h2>{time}</h2>
                <BorderLinearProgress variant="determinate" value={progress} />
            </div>
            <div className="playerbody__controls">
            <SkipPreviousIcon onClick={toggleBackward} className="player__white"/>
            {
                isPaused?(<PlayCircleOutlineIcon onClick={togglePause} className="player__green"/>):(
                    <PauseCircleOutlineIcon onClick={togglePause} className="player__green"/>
                )
            }
            
            <SkipNextIcon onClick={toggleForward} className="player__white"/>
            </div>
            
        </div>
    )
}

export default PlayerBody
