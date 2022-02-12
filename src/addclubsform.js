import React from 'react';
import { Row, Col } from "react-bootstrap";

const Addclubsform = (props) => {

  const { period, idclub, club, nr } = props;

  // If it finds the object, fetch the club and period, otherwise don't fetch anything to 
  // keep the application from crashing.
  return (idclub != null
    ? <>
        <Row className="align-items-center">
          <Col sm={9}>
            <strong>{club}</strong> {period}
          </Col>
        </Row>
      </>
    : null
  );

}

export default Addclubsform;
