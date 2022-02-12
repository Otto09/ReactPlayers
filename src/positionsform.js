import React, { useState } from "react";
import {Form, Container, Button} from "react-bootstrap";

const Positionsform = (props) => {
  const [idposition, setIdposition] = useState();
  const [position, setPosition] = useState();

  const afterSubmit = (evt) => {
    evt.preventDefault();
    
    const positioncard = {idposition, position}
    props.deliver(positioncard);

    // I empty the form controls
    setIdposition(0);
    setPosition("");
  }

  const stil = {
    h2: { textAlign: "center" }
  };

  const stil2 = {
    width: "750px",
  };

  return (
    <Container  style={stil2}>
      <h2 className="mt-4" style={stil.h2}>
        New Position
      </h2>
      <Form onSubmit={afterSubmit}>
        <Form.Group>
          <Form.Label>Position:</Form.Label>
          <Form.Control
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
          <Button variant="primary" type="submit" size="lg">
            Save
          </Button>

          <Button variant="primary" type="reset" href="/" size="lg">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  )

}

export default Positionsform;
