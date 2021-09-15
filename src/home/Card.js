import React,{useState,useEffect} from 'react'
import './Card.css'
import SubCard from './SubCard'


export default function Card() {
  const [adj,setAdj] = useState('popular');
  const adjectives = ["popular","trending","famous","awesome"];
  useEffect(() => {
    setInterval(function(){ 
        const l = Math.floor(Math.random() * 3);
        setAdj(adjectives[l])
       }, 5000);
  }, [])
 


    return (
        <div className="card">
            <div className="card__left">
              <h1>Find the most <span className="card__anime">{adj}</span> songs here</h1>
            </div>
            
            <div className="card__right">
                <div className="card__long">
              <h2>Tired of searching tunes that are famous on insta reels??</h2>
              <p>That's why we created <strong>Trunes</strong></p>
                </div>
                
                
                {/* <div className="card__children mir">
                
                        <SubCard srcId="PL9Ve8kOFycAN3hg1_YTs7BMvDLj_xtRT0" head="Viral 20" tail="GLOBAL" url="https://fvmstatic.s3.amazonaws.com/maps/m/WRLD-EPS-02-4003.png" color="#02466e8e" gradient="linear-gradient(160deg, #0094e967 0%, #80d0c7b9 100%)"/>
                        <SubCard srcId="PL9Ve8kOFycANbm5FF4qPqE4yML0DjBBDL" head="Top 20" tail="INDIA" url="https://fvmstatic.s3.amazonaws.com/maps/m/IN-EPS-02-4001.png" color="#21d5fd5b" gradient="linear-gradient(19deg, #21d5fdb0 0%, #b921ffa2 100%)"/>
                        <SubCard head="Our picks" color="rgba(0,0,0,0.5)" tail="Made For You" url="https://images.unsplash.com/photo-1619597361832-a568b1e0555f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRqfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                        <SubCard head="Emerging" url="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBzaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" tail="GLobal"/>
                        
                </div> */}
                
                
            </div>
            
        </div>
    )
}
