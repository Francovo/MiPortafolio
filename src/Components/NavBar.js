import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/NavBar.scss";

const NavBar = () => {
  const [Btn, setBtn] = useState(false);

  return (
    <div className="ContainerNav">
      <div className={`NavBar ${Btn ? "active" : ""}`}>
        <a href="#Biografia" className="Nav_Link" onClick={() => setBtn(false)}>
          Inicio
        </a>

        <a href="#Skills" className="Nav_Link" onClick={() => setBtn(false)}>
          Skills
        </a>

        <a href="#Formacion" className="Nav_Link" onClick={() => setBtn(false)}>
          Formacion
        </a>

        <a href="#Proyectos" className="Nav_Link" onClick={() => setBtn(false)}>
          Proyectos
        </a>

        <a href="#Contacto" className="Nav_Link" onClick={() => setBtn(false)}>
          Contacto
        </a>
      </div>
      <button className="burguer_Icon" onClick={() => setBtn(!Btn)}>
        <GiHamburgerMenu size={30} className="Icon" />
      </button>
      <div className={`AnimacionOpen ${Btn ? "active" : ""}`}></div>
    </div>
  );
};

export default NavBar;
