import React from 'react'
import styled from 'styled-components'
import request from '../../api/request'
import Banner from '../../components/Banner'
import Category from '../../components/Category'
import Nav from '../../components/Nav'
import Row from '../../components/Row'

const MainPage = () => {
  return (
    <>
    <header>
        <Nav />
        <Banner />
    </header>
    <Container>
      <Category />
      <Row title="Transding Now" id="TN" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={request.fetchComedyMovies} />
    </Container>
    </>
  )
}

export default MainPage

const Container = styled.main`
  display: block;
  padding : 0 clac(3.5vw + 5px);
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  position: relative;
  top:72px;

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`