import React from 'react'
import styled from 'styled-components'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import profilePic from '../../images/profile4.jpg'
import background from '../../images/landscapes/1.jpg'
import logoName from '../../images/profile-name-whites.svg'

export const TopBar = styled.div`
  display: flex;
  // background: var(--header-background-color);
  background: transparent;
  width: 100%;
  height: 50px;
  justify-content: flex-end;
  align-items: center;
  padding: 10px
  `;
  
const SocialMediaIcon = styled.a`
  padding: 5px;
  margin: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  z-index:10;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  border: 2px solid var( --header-background-color-main-2);
  border: 2px solid var(--header-border-color);
  border-radius: 5px;
  // background: var(--header-background-color);
  // background: transparent;
  background: rgba(255,255,255,0.3);
  color: var(--header-font-color);
  cursor: pointer;

  :hover{
    background: var(--header-hover-background-color);
    color: var(--header-hover-font-color)
  }
  `
  
  export const ProfilePictureBorder = styled.div`
  background: var(--header-border-color);
  z-index: 9;
  width: calc(var(--profile-picture-size) + var(--profile-picture-border-size));
  height: calc(var(--profile-picture-size) + var(--profile-picture-border-size));
  max-width: calc(var(--profile-picture-max-size) + var(--profile-picture-border-size));
  max-height: calc(var(--profile-picture-max-size) + var(--profile-picture-border-size));
  border-radius: 50%;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
  
  :after {
    content:'';
    top:0;
    transform:translateX(100%);
    width: calc(var(--profile-picture-size) + var(--profile-picture-border-size));
    height: calc(var(--profile-picture-size) + var(--profile-picture-border-size));
    max-width: calc(var(--profile-picture-max-size) + var(--profile-picture-border-size));
    max-height: calc(var(--profile-picture-max-size) + var(--profile-picture-border-size));
    position: absolute;
    z-index:1;
    background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 65%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%);
    animation: slide 10s infinite;
  }
  
  
  @keyframes slide {
    0% {transform:translateX(-100%);}
    5% {transform:translateX(100%);}
  }

  @media only screen and (max-width: 400px){
    display: none
  }
`


const ProfileImg = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  width: var(--profile-picture-size);
  height: var(--profile-picture-size);
  max-width: var(--profile-picture-max-size);
  max-height: var(--profile-picture-max-size);
  cursor: pointer;
  position: relative;
  top: calc(var(--profile-picture-border-size)/2);
  // background: black;  
  // border: 3px solid var(--header-border-color);
  z-index:10;
  
}
`
  
export const HeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--header-background-color);
  background-image: linear-gradient(45deg, var(--header-background-color) ,var(--header-background-color-2) );
  padding: 20px;
  height: 100vh;
  position: relative;

  :after {
    content:'';
    top:0;
    //   transform:translateX(100%);
    width:100%;
    height:100vh;
    position: absolute;
    z-index:1;
    background-image: linear-gradient(45deg, var(--header-background-color) ,var(--header-background-color-2) );
    background-image: linear-gradient(45deg, rgba(50, 67, 118, 0.75) , rgba(50, 67, 118, 0.75) );
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.75) , rgba(50, 67, 118, 0.75) );
    background-image: linear-gradient(45deg,  rgba(143,188,143, 0.75) , rgba(143,188,143, 0.75) );
    background-image: linear-gradient(45deg,  rgba(143,188,143, 0.75) , rgba(143,188,143, 0.75) );
    background-image: linear-gradient(45deg, rgba(255,255,255, 0.75) , rgba(50, 67, 118, 0.75) );
    background-image: linear-gradient(225deg, rgba(255, 255, 255, 0.75) , rgba(32,178,170, 0.75));
    background-image: linear-gradient(180deg, var(--header-background-color-main-1) 10%, var(--header-background-color-main-3) ,var(--header-background-color-main-2) );
    background-image: linear-gradient(225deg, var(--header-background-color-main-1) 10%, var(--header-background-color-main-3) );
    //   animation: slide 10s infinite;
    
    //   background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 65%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%);
  }
  
  
  @keyframes slide {
    0% {transform:translateX(-100%);}
    5% {transform:translateX(100%);}
  }
  @media only screen and (max-width: 400px){
    padding: 10px
  }
  `
  const LogoName = styled.img`
  z-index:10;
  max-width: 500px;
  margin: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  margin: auto;
  padding: 20px;
  max-height: 280px;
  @media(max-width: 400px){
    margin: 0
  }
`

export const Logo = ()=>(
  <LogoName src={logoName} alt="Alberto J Santos" />
)

export const ProfilePicture = () => (
  <ProfileImg onClick={smoothScroll} className="profile" src={profilePic} alt="profile pic" />
)

export const SocialMediaLinks = ()=>(
  // <div style={{paddingTop: '5px',marginTop:'10px', width:"100%", display:'flex', justifyContent:'flex-end'}} >
  <>
    <SocialMediaIcon href="https://github.com/santoscaj" target="_blank" > 
      <FaGithub/>
    </ SocialMediaIcon> 
    <SocialMediaIcon href="https://www.linkedin.com/in/santoscaj/" target="_blank" > 
      <FaLinkedin/>
    </ SocialMediaIcon> 
    <SocialMediaIcon href="mailto:alberto@santosaj.com?subject=Your Website" > 
      <HiOutlineMail/>
    </ SocialMediaIcon>
  </> 
  // </div>
)

/*
  smoothScroll function from:
  https://codepen.io/cesarrrguez/details/xxOeKwe
*/
const smoothScroll = ( speed = 1, acceleration = 1.085, speedLimit = 100) => {
  let targetElement = document.getElementById('intro')
  const scroll = window.pageYOffset;
  const position = targetElement.getBoundingClientRect().top + scroll;
  const distance = position - scroll;
  let toTop = false;

  if (distance < 0) {
    toTop = true;
    speed *= -1;
  }

  const loop = () => {
    const currentScroll = window.pageYOffset;
    const targetPos = targetElement.getBoundingClientRect().top + currentScroll;
    const distanceToTarget = targetPos - currentScroll;

    if (distanceToTarget < speed && !toTop) {
      window.scrollBy(0, distanceToTarget);
    } else {
      window.scrollBy(0, speed);
      const speedToLimitSpeed = speedLimit - speed;
      const acceleratedSpeed = speed * acceleration;

      if (speedToLimitSpeed - speed > acceleratedSpeed) speed *= acceleration;
      else speed = speedLimit;

      if (toTop && distanceToTarget === 0) return;
      requestAnimationFrame(loop);
    }
  };
  loop();
};

