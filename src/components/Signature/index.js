import React from 'react';
import Logo from '../../assets/img/google.png';
import './style.css';

function Signature({ data }) {
  return (
    <div className="signature">
      <img
        src={Logo}
        className="logo"
        alt="Logo" />

      <div className="signature-text">
        <h3>{data.name}</h3>
        <p className="p-infos">{data.position}</p>
        <p className="p-infos">{data.phoneNumber}</p>
        <p className="p-phase">{data.phase}</p>
      </div>
    </div>
  );
}

export default Signature;
