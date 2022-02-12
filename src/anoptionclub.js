import React from 'react';

const Anoptionclub = (props) => {

    const { club, idclub} = props;
    
    return (
        <option value={idclub}>{club}</option>       
    );
}

export default Anoptionclub;
