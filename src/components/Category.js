import React from 'react'
import styled from "styled-components"

const Category = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="디즈니 로고" />
        <video autoPlay loop muted>
          <source src='/videos/disney.mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="마블 로고" />
        <video autoPlay loop muted>
          <source src='/videos/marvel.mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="픽사 로고" />
        <video autoPlay loop muted>
          <source src='/videos/pixar.mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="스타워즈 로고" />
        <video autoPlay loop muted>
          <source src='/videos/star-wars.mp4' />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="내셔널 지오그래픽 로고" />
        <video autoPlay loop muted>
          <source src='/videos/national-geographic.mp4' />
        </video>
      </Wrap>
    </Container>
  )
}

export default Category

const Container = styled.div`
  display: grid;
  margin-top: 30px;
  padding: 30px 0 26px;
  gap: 25px;
  grid-template-columns : repeat(5, 1fr);

  @media (max-width: 768px){
    grid-template-columns : repeat(1, 1fr);
  }
`;

const Wrap =styled.div`
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
              rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  padding-top: 56.25%;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity:1;
    position: absolute;
    inset: 0px;
    z-index: 1;
    transition: opacity 500ms ease-in-out 0s;
  }

  video{
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0px;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video{
      opacity: 1;
    }  
  }
`