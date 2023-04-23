import React, {useContext} from 'react'
import { AppContext , useGlobalContext} from './context'

const Home = () => {
   const name=useGlobalContext(AppContext)
   console.log(name)
    return (
   
   <>
     <p>{name}</p>
   </>
  )
}

export default Home
