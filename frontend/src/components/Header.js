import React from 'react'
import {TopBar, SocialMediaLinks, HeaderCenter, ProfilePicture, Logo } from './dependencies/HeaderComponents'
import styled from 'styled-components'

const HeaderDiv = styled.div`
  height: 100vh;
  background: var(--header-background-color);
  border: 1px solid red;
`

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