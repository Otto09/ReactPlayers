import React from 'react';
import Anoptionposition from "./anoptionposition";

const Positionselectlist = (props) => {

  const { positionscards } = props;

  const positionselectlist = positionscards.map((item) => (

    <Anoptionposition
      position={item.position} 
      idposition={item.idposition}
      key={item.idposition}  
    />                     
  ));

  return (
    <> 
      {positionselectlist} 
    </>  
  );
}

export default Positionselectlist;
