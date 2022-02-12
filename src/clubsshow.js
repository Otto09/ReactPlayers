import React from 'react';
import Aclubshow from './aclubshow';

const Clubsshow = (props) => {

  const { cluburi, clubsedit, historydelete, clubscards } = props;

  // We are looking for the object in the clubscards array that contains the idclub for the 
  // selected club.  If it finds it, send his property club to Aclubshow component, or 
  // don't send anything to keep the application from crashing.
  const clublist = cluburi.map((item) => {
    const clubinfo = clubscards.find(c => c.idclub === item.idclub);

    return(
      <Aclubshow
        idclub = {item.idclub}
        club={clubinfo ? clubinfo.club : null}
        period = {item.period}
        idhistory = {item.idhistory}
        clubsedit={clubsedit}
        historydelete={historydelete}
        key={item.idclub}
    />
    );
  });

  return ( 
    <>
      {clublist}<br />
    </>    
  );
}

export default Clubsshow;
