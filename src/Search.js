import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {query,setquery, iserror}= useGlobalContext();
  return (
   <>
    <section className='search-section'>
    <h2>Search Movie</h2>
    <form action='#' onSubmit={(e)=>{
      e.preventDefault();
    }}>
    
    <div>
      <input type="text" placeholder='search movie'
       value={query}
      onChange={(e)=>setquery(e.target.value)}
    
      />
    </div>
    </form>

    <div>
    {console.log(iserror)}
      <p>{iserror.show &&  iserror.msg}</p>
    </div>
    </section>
   </>
  )
}

export default Search
