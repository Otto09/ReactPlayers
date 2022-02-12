import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import Clubs from "./clubs";

const Pagecard = (props) => {
  const { image, name, country, position, cluburi, id, deleteitem, edititem, clubscards} 
   = props;
  
  const tiltleHeight = {
    height: '3.5rem'
  };

  const overflow = {
    height: '12rem',
    overflow: 'auto'
  };

  // If it finds the object in the countriescards array that contains the idcountry  
  // fetched from players table, fetch his property country , or  don't send anything 
  // to keep the application from crashing. The same for positionscards array.
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title><div style={tiltleHeight}><h4>{name}</h4></div></Card.Title>
        <Card.Text>
          <div style={overflow}>
            Country: <b>{country ? country : null}</b><br />
            Position: <b>{position ? position : null}</b><br /><br />
            <Clubs cluburi={cluburi} clubscards={clubscards}/><br />
          </div>
          <div className="text-center">
            <Button variant="primary" onClick={() => edititem(id)} id={id} 
              size="lg">
              Edit
            </Button>{' '}
            <Button variant="primary" onClick={() => deleteitem(id)} id={id} href="/"
             size="lg">                
              Delete
            </Button>{' '}
            <Button variant="warning" href="/" size="lg">
              Players
            </Button>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )

}

export default Pagecard;
