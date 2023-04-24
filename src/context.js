import React, { useContext, useEffect, useState } from "react"; //http://www.omdbapi.com/?apikey=1c0ba39a&s=titanic
const API_URL =`http://www.omdbapi.com/?apikey=1c0ba39a`
const AppContext= React.createContext();

const AppProvider= ({children})=>{

    const[isload,setload]=useState(true)
    const[movie,setmovie]=useState([]);
    const[iserror,seterror]=useState({show:false,msg:" "})
    const [query, setquery]=useState("avenger");
    const getMovies= async(url)=>{
     try{
        const res=  await fetch(url)
        const data= await res.json()
        console.log(data)
        if(data.Response==='True'){
            
            setmovie(data.Search);
            setload(false);

        }else{
          seterror({
            show:true,
            msg:data.error,
          })
        }
    }
     catch(error){
       console.log(error);
     }

    };
    useEffect(()=>{
    
          let timer = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);
          },2000);
         return ()=>clearTimeout(timer);
  
      
    },[query]);
   
    return <AppContext.Provider value={{iserror,isload,movie,query,setquery}}>{children}</AppContext.Provider>

}
const useGlobalContext=()=>{
     return useContext(AppContext)
}
export {AppContext,AppProvider, useGlobalContext}