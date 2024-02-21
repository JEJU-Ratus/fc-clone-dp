import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {

  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

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
  
  const handelChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
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
        <Login>Login</Login> :
        <Input
          value={searchValue}
          onChange={handelChange}
          className='nav__input' 
          type='text' 
          placeholder='검색어를 입력하세요.'></Input>
      }
    </NavWrapper>
  )
}

export default Nav

const Login = styled.a`
  padding: 8px 16px;
  border : 1px solid #f9f9f9;
  background-color : rgba(0,0,0,0.6);
  transition: all 0.2s ease 0s;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  &:hover {
    border-color : transparent;
    background-color : #f9f9f9;
    color : gray;
  }
`;

const Input = styled.input`
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: rgba(0,0,0, 0.582);
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  color: white; 
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 36px;
  background-color: ${props => props.$show ? '#090b13':'transparent'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  letter-spacing: 16px;
`;

const Logo = styled.a`
display: inline-block;
width: 80px;
max-height: 70px;
margin-top: 4px;
padding: 0;
font-size: 0;

img{
  width: 100%;
}
`