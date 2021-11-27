import React from 'react'
import styled from 'styled-components'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import profilePic from '../../images/profile.jpg'
import logoName from '../../images/profile-name-black.svg'

export const TopBar = styled.div`
  display: flex;
  background: var(--header-background-color);
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
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  border: 1px solid var(--header-border-color);
  border-radius: 5px;
  background: var(--header-background-color);
  color: var(--header-font-color);
  cursor: pointer;

  :hover{
    background: var(--header-hover-background-color);
    color: var(--header-hover-font-color)
  }
  `

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 300px;
  height: auto;
  cursor: pointer;
  background: black;  
  border: 3px solid var(--header-border-color);
  // border-width: 3px;
  // border-image: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 12%, rgba(0,212,255,0.8270658605238971) 89%);
  // border-image-slice: 1;
  // margin: 50px;
  // box-shadow: 0px 0px 0px 4px rgba(0,0,0,0.89);
  // outline:

  @media only screen and (max-width: 300px){
    display: none
  }

  }
  `
  
export const HeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--header-background-color);
  padding: 50px;
  
  @media only screen and (max-width: 300px){
    padding: 10px
  }
  `
const LogoName = styled.img`
  max-width: 500px;
  margin: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  margin: auto;
  padding: 20px;
  max-height: 280px;
  @media(max-width: 300px){
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

