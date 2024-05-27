import React from 'react'
import MovieCard from './MovieCard'
import Addmovie from './Addmovie'
import './Movielist.css'

function Movielist({movies,setmovies,text,rate}) {
  return (
    <>
    <div style={{marginTop:"35px",marginLeft:"25px"}}>
       <Addmovie movies={movies} setmovies={setmovies}/> 
       </div>
    <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",padding:"5px",gap:"40px",margin:"80px auto",placeItems:"center",}}>
      {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=rate)
      .map((el)=><MovieCard el={el}/>)
      .reverse()}
    </div>

    </>
  )
}

export default Movielist
