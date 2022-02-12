import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";

const Aclubshow = (props) => {

  const {idclub, club, period, idhistory, clubsedit, historydelete } = props;

  const stil = {
    svg: {
      pointerEvents: "none"
    }
  };

    // If it finds the object, fetch the club, otherwise don't fetch anything to 
    // keep the application from crashing.
    return (
      <>
        <Row className="align-items-center">
          <Col sm={9}>
            <b>{club ? club : null}</b> {period}<br />
          </Col>
          <Col sm={3}>
            <Button variant="link" onClick={() => clubsedit(idclub)} 
              idclub={idclub} style={stil}>
              <BsPencilSquare />
            </Button>
            <Button variant="link" onClick={() => historydelete(idhistory)} 
              idhistory={idhistory} style={stil}>
              <BsTrashFill />
            </Button>
          </Col>
        </Row>
      </>
    );
}

export default Aclubshow;
