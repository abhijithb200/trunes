import React from 'react'
import './App.css';
import Footer from './Footer';
import Header from './Header'
import Banner from './Banner';
import Card from './Card';
import LanguageCard from './LanguageCard'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function Home() {
    return (
        <div className="app">

  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>   
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#language"><li>Song in your language</li></a>
      <a href="#sleep"><li>Sleep</li></a>
      <a href="#lofi"><li>Lo-fi Music</li></a>
    </ul>
  </div>

            <Header/>
           
      <Banner/>
      <Card/>
      <h3>Listen to top songs in your language</h3>
    <div id="language" className="language-cards" >
        <LanguageCard srcId="PLO7-VO1D0_6N2ePPlPE9NKCgUBA15aOk2" lang="English" imgURL="https://images.unsplash.com/photo-1593359863503-f598684c806f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
        <LanguageCard srcId="PL4fGSI1pDJn40WjZ6utkIuj2rNg-7iGsq" lang="Hindi" imgURL="https://www.mordeo.org/files/uploads/2016/09/Arijit-Singh-Live-at-Bordoloi-Trophy-Mobile-Wallpaper.jpg"/>
        <LanguageCard srcId="PL3oW2tjiIxvTaC6caIGR55W3ssqGvb_LR" lang="Tamil" imgURL="https://wallpaperaccess.com/full/3565578.jpg"/>
        <LanguageCard srcId="PLrKtdlwZTX4SuThK9oDD7MEzqMzFavtOJ" lang="Malayalam" imgURL="https://i.pinimg.com/originals/dd/97/aa/dd97aab25f517b8f0941980204f7859b.jpg"/>
      </div>  
      <h3 id="sleep">Sleep</h3>
      <div className="language-cards" >
        <LanguageCard srcId="PLhn6RI-s94ua7APvcNyGkV_OTn7hNZVAE" lang="Sleep" imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAg32o2ADE-DOdHeEmosCcsUOxp7wf9-V5Dw&usqp=CAU"/>
        <LanguageCard srcId="PL5DAB733F1999178F" lang="Deep Sleep" imgURL="https://images.unsplash.com/photo-1611416517780-eff3a13b0359?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMGF0JTIwbmlnaHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"/>
        <LanguageCard srcId="PLfgy80xbJIlRO3GM8UtWV7QJcRcGmY_4m" lang="Instrumental" imgURL="https://i.pinimg.com/originals/e8/76/82/e87682fbb833ba0ad260b5a92d778344.jpg"/>
      </div>
      <h3 id="lofi" >Lofi Musics</h3>
      <div className="language-cards" >
        <LanguageCard srcId="PLOzDu-MXXLliO9fBNZOQTBDddoA3FzZUo" lang="Lofi-Musics" imgURL="https://cdn.playlists.net/images/playlists/image/large/1f256ff4eb09c0a49d02f4c8eaa977aa.jpg"/>
        <LanguageCard srcId="PLTmSwjwKj6m3Nt8pZI3NnpW9gAa-KqV03" lang="Hindi Lofi Musics" imgURL="https://i2.wp.com/ytimg.googleusercontent.com/vi/LxF_W414hao/hqdefault.jpg"/>
      </div>
      <Footer/>
        </div>
    )
}

export default Home
