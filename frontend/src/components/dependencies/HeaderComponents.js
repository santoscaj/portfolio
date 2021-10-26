import React from 'react'
import styled from 'styled-components'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
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
  border: 3px solid var(--header-border-color);
  // margin: 50px;
  
  @media only screen and (max-width: 300px){
    display: none
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
  <ProfileImg src={profilePic} alt="profile pic" />
)

export const SocialMediaLinks = ()=>(
  <>
    <SocialMediaIcon href="https://github.com/santoscaj" target="_blank" > 
      <FaGithub/>
    </ SocialMediaIcon> 
    <SocialMediaIcon href="https://www.linkedin.com/in/santoscaj/" target="_blank" > 
      <FaLinkedin/>
    </ SocialMediaIcon> 
  </>
)