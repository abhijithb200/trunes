import './App.css';
import Home from './Home'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Player from '../player/Player'
import Main from '../Music page/Main'
import React,{useEffect,useState} from 'react'


function App() {
  const [counter,setCounter] = useState(1);

useEffect(() => {
  setInterval(() => {
    setCounter(counter+1);
  }, 500);
  
  if(counter==1){
  
    document.getElementById('app').style.display ='none' 
  }
    if(counter==6){
      document.getElementById('load').style.display ='none' 
      document.getElementById('app').style.display ='block'
    }
},[counter])

  return (
    <div>
      <div className="load" id='load'>
      <img src="/headphone.gif"  height="280"/>
      </div>
      
      
    <div className="app" id='app'>
      
      <Router>
      <Switch>
        <Route path="/:playlistId/:head">
          <Main/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
       
        </Switch>
      </Router>
      
    </div>
    </div>
  );
}

export default App;
