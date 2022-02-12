import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Clubs from "./clubs";

const ACard = (props) => {

  const { name, image, idcountry, idposition, id, countriescards, positionscards,
   clubscards, cluburi } = props;

  // We are looking for the object in the countriescards array that contains the idcountry 
  // fetched from players table. If it finds it, fetch his property country , or  don't send
  // anything to keep the application from crashing. The same for positionscards array.
  const countryinfo = countriescards.find(c => c.idcountry === idcountry);
  const positioninfo = positionscards.find(p => p.idposition === idposition);

  const stilCol = {
    height: '42.5rem',
    paddingBottom: '12px',
  };

  const bold = {
    fontWeight: 'bold'
  };

  const overflow = {
    height: '12rem',
    overflow: 'auto'
  };

  const tiltleHeight = {
    height: '3.5rem'
  };

  let url = "/detailedcard/" + id;

  return (
    <Col sm={6} style={stilCol}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title><div style={tiltleHeight}><h4>{name}</h4></div></Card.Title>
          <Card.Text>
            <div style={overflow}>
              Country: <b>{countryinfo ? countryinfo.country : null}</b><br />
              Position: <b>{positioninfo ? positioninfo.position : null}</b><br /><br />
              <Clubs cluburi={cluburi} clubscards={clubscards}/>
            </div>
            <div className="text-center">
            <Button variant="warning" href={url} size="lg">
                More...
            </Button>                                  
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ACard;
