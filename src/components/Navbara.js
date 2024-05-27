import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";

function Navbara({settext , setrate}) {
  return (
    <>
    <Navbar expand="lg" className='navbar' style={{backgroundColor:"none",padding:"5px"}}>
      <Container fluid>
        <Navbar.Brand style={{color:"#cfc3c3",fontWeight:"800",fontSize:"25px",padding:"5px"}} href="#">Movie-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{color:"white",fontWeight:"500", fontSize:"20px",fontFamily:"Popines"}} href="#action1">Movies</Nav.Link>
            <Nav.Link style={{color:"white",fontWeight:"500", fontSize:"20px",fontFamily:"Popines"}} href="#action2">Conatct</Nav.Link>
            <Nav.Link style={{color:"white",fontWeight:"500", fontSize:"20px",fontFamily:"Popines"}} href="#">
              About
            </Nav.Link>
          </Nav>
          <ReactStars
    count={5}
    size={24}
    onChange={(newRating)=>setrate(newRating)}
    activeColor="#ffd700"
  />
          <Form className="d-flex" style={{padding:"15px"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{backgroundColor:"#d7c8cb",boxShadow:"2px 2px 3px gray",cursor:"pointer",border:"none"}}
              onChange={(e)=>settext(e.target.value)}
            />
            <Button variant="outline-success" style={{backgroundColor:"red",color:"white",boxShadow:"1px 1px 1px gray",border:"none"}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbara
