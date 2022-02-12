import React from 'react';
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Pagecard from "./pagecard";

const Detailedcard = (props) => {

    const { id } = useParams();// Destructuring. There can be several parameters.
    const { cards, deleteitem, edititem, clubscards, countriescards,  positionscards  } = 
    props;

    const detailedfilter = cards.filter((item) => {
        if (item.id === id) {
            return true;
        }
        return false;
    })

    // We are looking for the object in the countriescards array that contains the idcountry 
    // fetched from players table. If it finds it, send his property country to Pagecard 
    // component, or  don't send anything to keep the application from crashing.  The same 
    // for positionscards array.
    const playerdetailed = detailedfilter.map((item) => {
        
        const countryinfo = countriescards.find(c => c.idcountry === item.idcountry);
        const positioninfo = positionscards.find(p => p.idposition === item.idposition);

        return(
            <Pagecard
                name={item.name}
                image={item.image}
                idcountry={item.idcountry}
                country={countryinfo ? countryinfo.country : null}
                idposition={item.idposition}
                position={positioninfo ? positioninfo.position : null}
                cluburi={item.cluburi}
                id={item.id}
                key={item.id}
                deleteitem={deleteitem}
                edititem={edititem}
                clubscards={clubscards}
            />
        );                          
    });

    const stil = {
        h2: { textAlign: "center" }
    };

    return (
        <Container>
          <h2 className="mt-3 mb-3" style={stil.h2}>
            Player
          </h2>
        {playerdetailed}            
        </Container>
    );
}

export default Detailedcard;
