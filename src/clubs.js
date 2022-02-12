import React from 'react';
import Aclub from './aclub';

const Clubs = (props) => {
  const { cluburi } = props;

  // We are looking for the object in the clubscards array that contains the idclub for the 
  // selected club. If it finds it, send his property club to Aclub component, or 
  // don't send anything to keep the application from crashing.
  const clublist = cluburi.map((item) => {
    const clubinfo = props.clubscards.find(c => c.idclub === item.idclub);

    return (
      <Aclub
        idclub={item.idclub}
        club={clubinfo ? clubinfo.club : null}
        period = {item.period}
        key = {item.idclub}
      />
    );
  });

  return ( 
    <>
      <b>Clubs:</b><br />
      {clublist}<br />
    </>    
  );
}

export default Clubs;
