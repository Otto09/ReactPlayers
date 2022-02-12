import React, { useState } from "react";
import {Form, Container, Button} from "react-bootstrap";

const Clubsform = (props) => {
  const [idclub, setIdclub] = useState();
  const [club, setClub] = useState();

  const aftersubmit = (evt) => {
    evt.preventDefault();
    
    const clubcard = {idclub, club}
    props.deliver(clubcard);

    // I empty the form controls
    setIdclub(0);
    setClub("");
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
        New Club
      </h2>
      <Form onSubmit={aftersubmit}>
        <Form.Group>
          <Form.Label>Club:</Form.Label>
          <Form.Control
            type="text"
            value={club}
            onChange={(e) => setClub(e.target.value)}
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

export default Clubsform;