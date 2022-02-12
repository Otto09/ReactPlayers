import React, { useState } from "react";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import Clubsshow from "./clubsshow";
import Addclubsform from "./addclubsform";
import Clubselectlist from "./clubselectlist";
import Countryselectlist from "./countryselectlist";
import Positionselectlist from "./positionselectlist";
import { MdCheckCircle, MdAddCircle } from "react-icons/md";

const Playersform = (props) => {
  const [id, setId] = useState(props.obedit.id);
  const [name, setName] = useState(props.obedit.name);
  const [image, setImage] = useState(props.obedit.image);
  const [idcountry, setIdcountry] = useState(props.obedit.idcountry);
  const [idposition, setIdposition] = useState(props.obedit.idposition);
  const [cluburi, setCluburi] = useState(props.obedit.cluburi);
  const [period, setPeriod] = useState("");
  const [idclub, setIdclub] = useState(0);
  const [idclubold, setIdclubold] = useState(0);
  const [playerclubslist, setPlayerclubslist] = useState([{}]);
  const [nr, setNr] = useState();
  const [showlist, setShowlist] = useState(true);
  const [playerclubslistedit, setPlayerclubslistedit] = useState([{}]);
  
  const { cards, historydelete, clubscards } = props;

  const stil = {
    h2: { textAlign: "center" }
  };
  
  const clubsfilter = cards.filter((item) => {
    if (item.id === id) {
        return true;
    }
    return false;
  });

  // Pressing the BSPencilSquare button stores the idclub value, searches for that idclub in 
  // the cluburi array of objects and stores it in idclub and period in state.
  const editingClub = (idclub) => {
    setIdclubold(idclub);
    let i=0;
    while (cluburi[i]) {
      if (cluburi[i]['idclub'] === idclub) {
        setIdclub(cluburi[i]['idclub']);
        setPeriod(cluburi[i]['period']);
        break;
      }
      i++;
    }
  };
  /*
  const editingClub = (idclub) => {
    setIdclubold(idclub);
    const sendinfostate = cluburi.find(c => c.idclub === idclub)
    //console.log('idclub', sendinfostate.idclub, 'period', sendinfostate.period);
    setIdclub(sendinfostate.idclub);
    setPeriod(sendinfostate.period); 
  };
  */
  const clubslist = clubsfilter.map((item) => (
    <Clubsshow 
      cluburi={item.cluburi}
      id={item.id}
      key={item.id}
      historydelete={historydelete}
      clubsedit={editingClub}
      clubscards={clubscards}
    />                     
  ));

  // We are looking for the object in the clubscards array that contains the idclub for the 
  // selected club. If it finds it, send his property club to Addclubsform component, or 
  // don't send anything to keep the application from crashing.
  const list = playerclubslist.map((item) => {
    const { clubscards } = props;
    const clubinfo = clubscards.find(c => c.idclub === item.idclub);

    return (
      <Addclubsform
        period = {item.period} 
        idclub={item.idclub}
        club={clubinfo ? clubinfo.club : null}
        key={item.nr}
        nr={item.nr}
      />
    );
  });

  const afteraddclub = (evt) => {
    evt.preventDefault();
    const newCluburi = {period, idclub, nr};

    setPeriod("");
    setIdclub(0);

    // la sirul de obiecte playerclubslist imi adauga o prima valoare {} pe care o 
    // scoatem, provenita din <option value="0">Choose Club</option>
    if (
      playerclubslist.length === 1
      && Object.getOwnPropertyNames(playerclubslist[0]).length === 0
    ) {
      newCluburi.nr = 1;
      setPlayerclubslist([newCluburi]);
    }
    else {
      newCluburi.nr = playerclubslist.length + 1;
      setPlayerclubslist([...playerclubslist, newCluburi]);
    }
  };

  // After editing the period and club, by pressing the MdCheckCircle button, the index  
  // number of club in the cluburi array is searched, if it is found, the cluburi array is 
  // cloned, the idclub and period values for that club are replaced and the new club array 
  // is sent to state.
  const aftereditclub = (evt) => {
    evt.preventDefault(); 
  
    let i = 0;
    let found = false;
    while (cluburi[i]) {
      if (cluburi[i]['idclub'] === idclubold) {
        found = true;
        break;
      }
      i++;
    }

    if (found) {
      const newCluburi = [...cluburi];
      newCluburi[i] = {idclub, period};
      setPlayerclubslistedit(newCluburi);
    } else {
      console.log("Club not found.");
    }
    /*
    const index = cluburi.findIndex(c => c.idclub === idclubold);
    if (index >= 0) {
      const newCluburi = [...cluburi];
      newCluburi[index] = {idclub, period};
      //console.log(index, newCluburi[index]);
      setPlayerclubslistedit(newCluburi);
    } else {
      console.log("Club not found.");
    }  
    */
  }

  const aftersubmit = (evt) => {
    evt.preventDefault();

    const playercard = {
      name,
      image: `../images/${image}`,
      idcountry,
      idposition,
      cluburi: (id > 0) ? playerclubslistedit : playerclubslist,
      idclub,
      period,
      id
    }

    if (id > 0) {
      playercard.id = id;
      props.editing(playercard);
    } else {
      props.deliver(playercard);
    }
    
    // I empty the form controls
    setName("");
    setImage("");
    setIdcountry(0);
    setIdposition(0);
    setPeriod("");
    setIdclub(0);

    setShowlist(false);
  }

  const stil2 = {
    width: "750px",
  };

  const stil3 = {
    svg: {
      pointerEvents: "none"
    }
  };

  return (
    <Container  style={stil2}>
      <h2 className="mt-4" style={stil.h2}>
        {id > 0 ? "Edit player" : "New player"}
      </h2>
      <Form onSubmit={aftersubmit}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Image:</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>
              Country:
          </Form.Label>

          <Form.Control as="select" value={idcountry} onChange={ev => setIdcountry(ev.target.value)}>
            <option value="0">Choose country</option>
            <Countryselectlist countriescards={props.countriescards}/>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>
              Position:
          </Form.Label>

          <Form.Control as="select" value={idposition} onChange={ev => setIdposition(ev.target.value)}>
            <option value="0">Choose position</option>
            <Positionselectlist positionscards={props.positionscards}/>
          </Form.Control>
        </Form.Group>

        <b>Clubs:</b><br />

        { (id > 0) ? clubslist : (showlist ? list : null) }<br />
      
        <Row className="align-items-center">
          <Col sm={5}>
            <Form.Control
              type="text"
              placeholder="Period"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            />
          </Col>

          <Col sm={1}>
            Club:
          </Col>

          <Col sm={3}>             
            <Form.Control as="select" value={idclub}
              onChange={ev => {setIdclub(ev.target.value) }}>
              <option value="0">Choose Club</option>
              <Clubselectlist clubscards={props.clubscards}/>  
            </Form.Control>             
          </Col>

          {id > 0
            ? <Col xs="auto">
              <Button variant="link" style={stil3} size="lg" onClick={aftereditclub}>
                <MdCheckCircle />
              </Button>
            </Col>
            : null
          }

          {id === 0
            ? <Col xs="auto">
              <Button variant="link" style={stil3} size="lg" onClick={afteraddclub}>
                <MdAddCircle />
              </Button>
            </Col>
            : null
          }
        </Row>

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

export default Playersform;
