import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {

  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  }, [])

  const handleScroll = () => {
    if(window.scrollY > 50){
      setShow(true);
    } else {
      setShow(false);
    }
  }
  
  return (
    <NavWrapper $show={show}>
      <Logo>
        <img
          alt='disney plus logo'
          src='/images/logo.svg'
          onClick={()=> (window.location.href = '/')}
        />
      </Logo>
      { pathname === '/' ?
        (<Login>Login</Login>) :
        (<Input className='nav__input' type='text' placeholder='검색어를 입력하세요.'></Input>)
      }
    </NavWrapper>
  )
}

export default Nav

const Login = styled.a`

`;

const Input = styled.input`

`;

const NavWrapper = styled.nav`
  padding: 0 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.$show ? '#090b13':'transparent'};
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