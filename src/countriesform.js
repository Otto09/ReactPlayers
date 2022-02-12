import React, { useState } from "react";
import {Form, Container, Button} from "react-bootstrap";

const Countriesform = (props) => {
  const [idcountry, setIdcountry] = useState();
  const [country, setCountry] = useState();
 
  const afterSubmit = (evt) => {
    evt.preventDefault();
    
    const countrycard = {idcountry, country}
    props.deliver(countrycard);

    // I empty the form controls
    setIdcountry(0);
    setCountry("");
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
        New Country
      </h2>
      <Form onSubmit={afterSubmit}>
        <Form.Group>
          <Form.Label>Country:</Form.Label>
          <Form.Control
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
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

export default Countriesform;
