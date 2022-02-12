import React from 'react';
import Anoptioncountry from "./anoptioncountry";

const Countryselectlist = (props) => {

  const { countriescards } = props;
  
  const countryselectlist = countriescards.map((item) => (
      
    <Anoptioncountry                     
      country={item.country} 
      idcountry={item.idcountry}
      key={item.idcountry}  
    />
  ));

  return (
    <> 
      {countryselectlist} 
    </>  
  );
}

export default Countryselectlist;
