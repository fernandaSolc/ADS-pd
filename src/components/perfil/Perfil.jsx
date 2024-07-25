import React from 'react';
import "./perfil.scss";
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';

function PerfilCom() {
  return (
    <>
      <ArrowBackIosSharpIcon />
      <div className="cardPerfil">
        <div id="infoPerfil">
          <img src="wizard.png" alt="Wizard" className="avatar" />
          <div className="profile-info">
            <h1>Fulano de Tal</h1>
            <p>email@email.com</p>
            <p>12/04/2000</p>
            <p>Dev Pleno</p>
          </div>
        </div>
        <div id="coinPerfil" className="pd-coins">
          <h2>PD Coins</h2>
          <p>Saldo total:</p>
          <div className="coins">App<br />$30</div>
          <p>Recebidos: 40</p>
          <p>Resgatados: 10</p>
          <button>Enviar</button>
        </div>
        <div id="conquistas" className="achievements">
          <div className="tab">CONQUISTAS</div>
          <div className="tab">SKILLS</div>
          <div className="tab">INTERESSES</div>
          <div className="tab">(EM BRANCO)</div>
          <div className="content">
            <div className="item">Bola de Cristal: Motivo resumido</div>
            <div className="item">Gato preto: Motivo resumido</div>
            <div className="item">Cavalo Xadrez: Motivo resumido</div>
            <div className="item">Coração curado: Motivo resumido</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilCom;
