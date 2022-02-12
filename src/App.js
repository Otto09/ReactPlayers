import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Playerscards from "./playerscards";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import NotFound from "./notfound";
import Playersform from "./playersform";
import Detailedcard from "./detailedcard";
import Countriesform from "./countriesform";
import Positionsform from "./positionsform";
import Clubsform from "./clubsform";
import "./style/style.css";

function App() {
  const [playerslist, setPlayerslist] = useState([]);
  const [modif, setModif] = useState(false);
  const [clubslist, setClubslist] = useState([]);
  const [countrieslist, setCountrieslist] = useState([]);
  const [positionslist, setPositionslist] = useState([]);
  const [edit, setEdit] = useState({
    id: 0,
    name: "",
    image: "",
    idcountry: "",
    idposition: "",
    cluburi: [{}],
  });

  useEffect(() => {
    fetch("http://localhost/players/players.php")
      .then((rezult) => rezult.text())
      .then((playerlist) => setPlayerslist(JSON.parse(playerlist)));
  }, [modif]);

  // The delete button has been selected in the table
  const deleteCard = (id) => {
    const dateScript = JSON.stringify({ id: parseInt(id, 10) });
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };
    // I'm correcting in the database
    fetch("http://localhost/players/doDeletePlayers.php", config).then(() => {
      setModif(!modif); // Modify the variable "modif", so useEffect () is triggered
    });
  };

  // Add the object created in "Playersform" to "playerslist"
  const addCard = (elm) => {
    const dateScript = JSON.stringify(elm);
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };

    // I'm correcting in the database
    fetch("http://localhost/players/doPostPlayers.php", config).then(() => {
      setModif(!modif); // Modify the variable "modif", so useEffect () is triggered
    });
  };

  const history = useHistory();
  // Function triggered by selecting the "edititem" button in "Pagecard"
  const editingCard = (id) => {
    var object = playerslist.find((item) => {
      return parseInt(item.id, 10) === parseInt(id, 10);
    });
    if (object) {
      setEdit(object);
      history.push("/playersform/" + id); // I impose the path "/playersform/" + id, so I 
      // trigger the  display of the form
    }
  };

  // Replace in "playerslist" the object edited in "Playersform"
  const editCard = (elm) => {
    const dateScript = JSON.stringify(elm);
    const config = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };

    // I'm correcting in the database
    fetch("http://localhost/players/doPatchPlayers.php", config).then(() => {
      setModif(!modif); // Modify the variable "modif", so useEffect () is triggered
    });

    // Empty the "edit" object from "states"
    setEdit({});
    history.push("/"); // Force route "/", so the "Playerscards" component will be displayed
  }
  
  useEffect(() => {
    fetch("http://localhost/players/clubs.php")
      .then((rezult) => rezult.text())
      .then((clublist) => setClubslist(JSON.parse(clublist)));
  }, [modif]);

  useEffect(() => {
    fetch("http://localhost/players/countries.php")
      .then((rezult) => rezult.text())
      .then((countrylist) => setCountrieslist(JSON.parse(countrylist)));
  }, [modif]);

  useEffect(() => {
    fetch("http://localhost/players/positions.php")
      .then((rezult) => rezult.text())
      .then((positionlist) => setPositionslist(JSON.parse(positionlist)));
  }, [modif]);

  // Add the object created in "Countriesform" to "countrieslist"
  const addCountriesCard = (elm) => {
    const dateScript = JSON.stringify(elm);
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };

    // I'm correcting in the database
    fetch("http://localhost/players/doPostCountries.php", config).then(() => {
      setModif(!modif); // Modify the variable "modif", so useEffect () is triggered
    });
  }

// Add the object created in "Positionsform" to "positionslist"
const addPositionsCard = (elm) => {
  const dateScript = JSON.stringify(elm);
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dateScript
  };

  // I'm correcting in the database
  fetch("http://localhost/players/doPostPositions.php", config).then(() => {
    setModif(!modif); // Modify the variable "modif", so useEffect () is triggered
  });
}

// Add the object created in "Clubsform" to "clubslist"
const addClubsCard = (elm) => {
  const dateScript = JSON.stringify(elm);
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dateScript
  };

  // I'm correcting in the database
  fetch("http://localhost/players/doPostClubs.php", config).then(() => {
    setModif(!modif); // Modify the variable "modif", so useEffect () is triggered
  });
}

// The delete button has been selected in the table
const deleteHistoryCard = (idhistory) => {
  const dateScript = JSON.stringify({ idhistory: parseInt(idhistory, 10) });
  const config = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: dateScript
  };
  // I'm correcting in the database
  fetch("http://localhost/players/doDeleteHistory.php", config).then(() => {
    setModif(!modif); // Modify the variable "modif", so useEffect () is triggered
  });
};

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Players Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/" >
              Players
            </Nav.Link>
            <Nav.Link as={Link} to="/playersform/">
              New Player
            </Nav.Link>
            <Nav.Link as={Link} to="/countriesform/">
              New Country
            </Nav.Link>
            <Nav.Link as={Link} to="/positionsform/">
              New Position
            </Nav.Link>
            <Nav.Link as={Link} to="/clubsform/">
              New Club
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Playerscards cards={playerslist} countriescards={countrieslist}
           positionscards={positionslist} clubscards={clubslist} />
        </Route>
        <Route path="/playersform/">
          <Playersform deliver={addCard} clubscards={clubslist}
           cards={playerslist} countriescards={countrieslist} 
           positionscards={positionslist} historydelete={deleteHistoryCard}
           editing={editCard} obedit={edit} />
        </Route>
        <Route path="/countriesform/">
          <Countriesform deliver={addCountriesCard} />
        </Route>
        <Route path="/positionsform/">
          <Positionsform deliver={addPositionsCard} />
        </Route>
        <Route path="/clubsform/">
          <Clubsform deliver={addClubsCard} />
        </Route>
        <Route path="/detailedcard/:id">
          <Detailedcard cards={playerslist} deleteitem={deleteCard} edititem={editingCard}
           countriescards={countrieslist} clubscards={clubslist} 
           positionscards={positionslist} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>  
  );
}

export default App;
