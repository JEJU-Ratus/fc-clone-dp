import axios from '../api/axios';
import React, { useCallback, useEffect, useState } from 'react'
import './Row.css'

const Row = ({title, id, fetchUrl}) => {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = useCallback(async () => {
    const res = await axios.get(fetchUrl);
    setMovies(res.data.results);
  },[fetchUrl])

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);
  

  return (
    <section>
      <h2>{title}</h2>
      <div className='slider'>
        <div className="slider__arrow-left">
          <span className="arrow"
          onClick={()=>{
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            console.log(document.getElementById(id).scrollLeft);
          }}>
            {"<"}
          </span>
        </div>
        <div className="row__posters" id={id}>
          {movies.map(movie => (
            <img
              className="row__poster"
              key={movie.id} 
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name} />
          ))}
        </div>
        <div className="slider__arrow-right">
            <span className="arrow"
            onClick={()=> {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}>
              {">"}
            </span>
        </div>
      </div>
    </section>
  )
}

export default Row