import React from 'react'
import {TopBar, SocialMediaLinks, HeaderCenter, ProfilePicture, ProfilePictureBorder, Logo } from './dependencies/HeaderComponents'
import background from '../images/landscapes/6.jpeg'


const Header = ()=>(
  <>
    <HeaderCenter style={{background:`url(${background})`, backgroundSize:'cover'}} >
      <TopBar>
        <SocialMediaLinks/>
      </TopBar>
      <ProfilePictureBorder  style={{flex:'1 0 auto'}}>
        <ProfilePicture/>
      </ProfilePictureBorder>
      <Logo style={{flex:'1 1 auto'}} />
    </HeaderCenter>
  </>
)

export default Header