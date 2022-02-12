import React from 'react';

const Anoptionposition = (props) => {

    const { position, idposition } = props;
    
    return (
        <option value={idposition}>{position}</option>       
    );
}

export default Anoptionposition;