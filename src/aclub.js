import React from 'react';


const Aclub = (props) => {

  const {idclub, club, period, clubsedit } = props;

  // If it finds the object, fetch the club and period, otherwise don't fetch anything to 
  // keep the application from crashing.
  return (idclub != null
    ?
      <>
        <b>{club}</b> {period}<br />
      </>
    : null
  );
}

export default Aclub;
