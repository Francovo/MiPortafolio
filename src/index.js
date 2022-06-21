import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Biografia from "./Components/Biografia";
import Formacion from "./Components/Formacion";
import Skills from "./Components/Skills";
import Proyectos from "./Components/Proyectos";
import { Contacto } from "./Components/Contacto";
import NavBar from "./Components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar/>
    <div className="ContainerAll">
      <Biografia />
      <Skills />
      <Formacion />
      <Proyectos />
      <Contacto />
    </div>
  </React.StrictMode>
);
