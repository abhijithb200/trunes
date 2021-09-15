import React,{useState,useEffect} from 'react'
import './Audiotest.css'
import YouTube from 'react-youtube';

var cElement = null;

  function Video(props) {

    const opts = {
      height: "0",
      width: "0",
      playerVars: {
        autoplay: 1
      }
    };

    useEffect(() => {
      if (cElement) {
        props.isPaused
          ? cElement.target.pauseVideo()
          : cElement.target.playVideo();
    }
      
    }, [props.isPaused]);
    
  
    const _onReady = event => {
      cElement = event;
  
    };
    
   
    const statech = event=>{
      if (event.data == YouTube.PlayerState.CUED) {
        console.log(event.target.getPlaylist());
    }
    }
    return (
      <YouTube
        
        opts={opts}
        videoId={props.songId ? (props.songId) : ""} 
        onReady={_onReady}
        onStateChange={statech}
      />
    );
  }
  function Audiotest() {
    const [isPaused, setIsPaused] = useState(true);
    const togglePause = () => {
      console.log("togglePause");
      setIsPaused(!isPaused);
    };
    return (
      <div className="App">
        <div className="iframe__obj">
        <Video isPaused={isPaused} />
        </div>
        
        <button onClick={togglePause}>Pause</button>
      </div>
    );
  }
  export default Video;