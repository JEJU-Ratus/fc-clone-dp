import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from '../api/axios';
import requests from '../api/request';
import './Banner.css';

const Banner = () => {

  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    const response = await axios.get(requests.fetchNowPlaying);
    const movieId = response.data.results[Math.floor(Math.random() * response.data.results.length)].id;
    
    const { data : movieDetail } = await axios.get(`movie/${movieId}`,{ params : { append_to_response: "videos"} })
    setMovie(movieDetail);
  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0,n) + "..." : str;
  }
  
  if(isClicked){
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe 
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              width='640' height='360' allow='autoplay; fullscreen'
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={()=>setIsClicked(false)}>
          X
        </button>
      </>
    )
  } 
  else {
    return (
      <section
      className='banner' 
      style={{
        backgroundImage : movie?.backdrop_path? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
        : 'none',
        backgorundPosition : "top center",
        backgroundSize: "cover"
      }}>
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className='banner__buttons'>
            {movie?.videos?.results[0]?.key && 
            <button
            className='banner__button play'
            onClick={()=>setIsClicked(true)}>
              Play
            </button>
            }
          </div>
          <h2 className='banner__description'>
            {truncate(movie.overview, 100)}
          </h2>
        </div>
        <div className='banner--fadeBottom' />
      </section>
    )
  }
}

export default Banner

const Container = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%
`

const Iframe = styled.iframe`
  width : 100%;
  height: 100%;
  border: none;
  opacity: 0.65;
  z-index: -1;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
  }
`