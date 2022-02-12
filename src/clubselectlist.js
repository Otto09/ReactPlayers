import React from 'react';
import Anoptionclub from "./anoptionclub";

const Clubselectlist = (props) => {

    const { clubscards } = props;

    const clubselectlist = clubscards.map((item) => (

        <Anoptionclub                     
            club={item.club}
            idclub={item.idclub}
            key={item.idclub}  
        />
    ));

    return (
        <> 
          {clubselectlist} 
        </>  
    );
}

export default Clubselectlist;
