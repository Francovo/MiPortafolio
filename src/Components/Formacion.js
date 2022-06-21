import React from "react";
import "../styles/Formacion.scss"

const Formacion = () => {
  return (
    <div className="Formacion" id="Formacion">
      <h1>Formacion Academica</h1>
      <ul className="ContainerFormacion">
        <li className="Formacion">
          <div style={{ pointerEvents: "none" }}>
            <h1>Tecnico en sistemas</h1>
            <div className="Formacion2">
              <h2>SENA</h2>
              <h3>2019-2020</h3>
            </div>
          </div>
        </li>
        <li className="Formacion">
          <div style={{ pointerEvents: "none" }}>
            <h1>Tecnologo Analisis de sistemas de informacion</h1>
            <div className="Formacion2">
              <h2>SENA</h2>
              <h3>2020-2022</h3>
            </div>
          </div>
        </li>
        <li className="Formacion">
          <div style={{ pointerEvents: "none" }}>
            <h1>Diplomado MisionTIC 2022</h1>
            <div className="Formacion2">
              <h2>MinTic</h2>
              <h3>2021</h3>
            </div>
          </div>
        </li>
        <li className="Formacion">
          <div style={{ pointerEvents: "none" }}>
            <h1>Oracle next education</h1>
            <div className="Formacion2">
              <h2>Oracle-Alura</h2>
              <h3>2022</h3>
            </div>
          </div>
        </li>
        <li className="Formacion">
          <div style={{ pointerEvents: "none" }}>
            <h1>Diplomado Academia Geek</h1>
            <div className="Formacion2">
              <h2>Academia Geek</h2>
              <h3>2022</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Formacion;
