import React from 'react'
import styled from'styled-components'

const Nav = () => {
  return (
    <NavWrapper>
      <Logo>
        <img
          alt='disney plus logo'
          src='/images/logo.svg'
          onClick={()=> (window.location.href = '/')}
        />
      </Logo>
    </NavWrapper>
  )
}

export default Nav

const NavWrapper = styled.nav`
  padding: 0 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #090b13;
  height: 70px;
  letter-spacing: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const Logo = styled.a`
padding: 0;
width: 80px;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display: inline-block;

img{
  width: 100%;
}
`