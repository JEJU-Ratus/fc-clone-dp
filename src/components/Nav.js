import React, { useEffect, useState } from 'react';
import styled from'styled-components';

const Nav = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      if(window.scrollY > 50){
        setShow(true);
      } else {
        setShow(false);
      }
    });
  
    return () => {
      window.removeEventListener('scroll',()=>{})
    }
  }, [])

  
  return (
    <NavWrapper $show={show}>
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