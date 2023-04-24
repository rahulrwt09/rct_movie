import React, { useContext, useEffect } from "react"; //http://www.omdbapi.com/?apikey=1c0ba39a&s=titanic
const API_URL =`http://www.omdbapi.com/?apikey=1c0ba39a&s=titanic`
const AppContext= React.createContext();

const AppProvider= ({children})=>{
    const getMovies= async(url)=>{
     try{
        const res=  await fetch(url)
        const data=res.json()
        console.log(data)
    }
     catch(error){
       console.log(error);
     }

    };
    useEffect(()=>{
      getMovies(API_URL);
    },[])
    return <AppContext.Provider value="abcD">{children}</AppContext.Provider>

}
const useGlobalContext=()=>{
     return useContext(AppContext)
}
export {AppContext,AppProvider, useGlobalContext}