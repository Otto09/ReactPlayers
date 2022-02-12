import React from 'react';

const Anoptioncountry = (props) => {

    const { country, idcountry } = props;
    
    return (
        <option value={idcountry}>{country}</option>       
    );

}

export default Anoptioncountry;
