import React from 'react';
import Logo from '../../assets/img/google.png';
import './style.css';

function Signature() {
  return (
    <div className="signature">
      <img
        src={Logo}
        className="logo"
        alt="Logo" />

      <div className="signature-text">
        <h3>Bruno Lino Andreo</h3>
        <p className="p-infos">Desenvolvedor de Sistemas</p>
        <p className="p-infos">XX XXXX-XXXX</p>
        <p className="p-phase">Mares calmos não formam bons marinheiros</p>
      </div>
    </div>
  );
}

export default Signature;
