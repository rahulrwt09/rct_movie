import React from 'react'   
import { useGlobalContext } from './context'
                            

const Movie = () => {
  const {movie}= useGlobalContext();
  return (
    <>
        {movie.map((el)=>{
        return <div>
          <h2>{el.Title}</h2>
        </div>
        })}
    </>
  )
}

export default Movie
