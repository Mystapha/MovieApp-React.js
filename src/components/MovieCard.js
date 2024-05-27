import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import './MovieCard.css'
function MovieCard({el}) {
  return (
  
    <Card className='cards'>
      <Card.Img variant="top" src={el.posterurl} style={{height:"180px"}} />
      <Card.Body>
        <Card.Title style={{textAlign:"center",padding:"10px",fontWeight:"bold",fontSize:"22px",color:"#cfeef3"}}>{el.name}</Card.Title>
        <Card.Text className='Descript'>
          {el.description}
        </Card.Text>
        <div className='pied' style={{display:"flex",justifyContent:"space-around",padding:"40px"}}>
        <Button className='btn' variant="primary" style={{backgroundColor:"red",border:"none"}}>Trailer</Button>
        <ReactStars
    count={5}
    size={24}
    edit={false}
    activeColor="#ffd700"
    value={el.rating}
  />
        </div>
      </Card.Body>
    </Card>
   
  )
}

export default MovieCard
