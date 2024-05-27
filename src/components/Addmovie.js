import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Addmovie({movies,setmovies}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie,setnewmovie]=useState({
    name:"",
    posterurl:"",
    description:"",
    rating:""
  });

const add=() => setmovies([...movies,newmovie])

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{backgroundColor:"#bf2727",border:"none"}}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:"bold"}}>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Name" onChange={(e) => setnewmovie({...newmovie,  name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:"bold"}}>Movie Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Image"  onChange={(e) => setnewmovie({...newmovie,    posterurl:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:"bold"}}>Movie Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Description"  onChange={(e) => setnewmovie({...newmovie,  description:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:"bold"}}>Movie Rating</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Rating"  onChange={(e) => setnewmovie({...newmovie,  rating:e.target.value})} />
      </Form.Group>
      </Form>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button 
          variant="primary" 
          style={{backgroundColor:"red",border:"none",boxShadow:"2px 2px 1px gray"}} 
          onClick={ () =>{
            add();
            handleClose() 
            alert("The card is added successfully")
          }}>
           Add 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addmovie
