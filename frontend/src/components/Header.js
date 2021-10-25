import React from 'react'
import {TopBar, SocialMediaLinks, HeaderCenter, ProfilePicture, Logo } from './HeaderComponents'


const Header = ()=>(
  <>
    <TopBar>
      <SocialMediaLinks/>
    </TopBar>
    <HeaderCenter>
      <ProfilePicture/>
      <Logo />
    </HeaderCenter>
  </>
)

export default Header