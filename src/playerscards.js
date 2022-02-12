import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ACard from "./acard";

const Playerscards = (props) => {

    const { cards, countriescards, positionscards, clubscards } = props;

    const playerlist = cards.map((item) => (

        <ACard
            name={item.name}
            image={item.image}
            idcountry={item.idcountry}
            idposition={item.idposition}
            cluburi={item.cluburi}
            id={item.id}
            key={item.id}
            countriescards={countriescards}
            positionscards={positionscards}
            clubscards={clubscards}
        />
    ));

    const stil = {
        h2: { textAlign: "center" }
    };

    return (
        <Container>
          <h2 className="mt-3 mb-3" style={stil.h2}>
            Players
          </h2>
          <Row>{playerlist}</Row>
        </Container>
    );
}

export default Playerscards;