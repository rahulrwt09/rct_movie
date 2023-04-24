import React from 'react'   
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';              
import './App.css'
const Movie = () => {
  const {movie}= useGlobalContext();
  return (
    <>
       <section className="movie-page">
        <div className="container grid grid-4-col">
                {movie.map((el)=>{
        const {imdbID,Title,Poster}=el
        const moviname= Title.substring(0,15);
         return(
        
          <NavLink to={`movie/${imdbID}`}   key={imdbID}>
            <div className='card'>
            <div className='card-info'>
             <h2>{moviname.length>=15?`${moviname}...`:moviname}</h2>
            <img src={Poster} alt={imdbID}/>

              </div>

            </div>

          </NavLink>
         
         );
        
        })}
        </div>
       </section>
    </>
  )
}

export default Movie
