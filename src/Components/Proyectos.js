import React from "react";
import { SiJavascript, SiReact, SiChakraui, SiGithub } from "react-icons/si";
import { ImShare } from "react-icons/im";
import "../styles/Proyectos.scss";

const Proyectos = () => {
  return (
    <div className="Container_All_Proyectos" id="Proyectos">
      <h1>Proyectos</h1>
      <div className="Proyectos">
        <div className="Proyecto">
          <div style={{ pointerEvents: "none" }}>
            <img
              src="https://res.cloudinary.com/aca-geek/image/upload/v1655758938/PORTAFOLIO/NotSpotify_bojnz8.png"
              className="Image"
              alt=""
            />
            <div className="Info">
              <h1 style={{ fontWeight: "500" }}>Visualizador de Spotify</h1>
              <h2>
                Aqui podras visualizar artistas, album, canciones de Spotify
                <br />
                <br />
                <b>Es recomendable utilizar estos datos al Loguearse:</b>
                <br />
                testingdev28@gmail.com <br />
                test123*
              </h2>
              <div className="Tech">
                <h2>
                  {" "}
                  <SiJavascript
                    size={23}
                    style={{
                      marginBottom: ".8rem",
                      marginTop: ".1rem",
                    }}
                  />
                </h2>
                <h2>
                  <SiReact size={22} style={{}} />
                </h2>
                <h2>
                  <SiChakraui
                    size={25}
                    style={{
                      marginBottom: ".8rem",
                    }}
                  />
                </h2>
              </div>
              <div className="LinkProyectos">
                <a
                  style={{ color: "#cdcdff" }}
                  href="https://github.com/Francovo/Not_Spotify"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGithub size={23} />
                </a>
                <a
                  style={{ color: "#cdcdff" }}
                  href="https://prueba-tecnica-body-tech.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImShare size={23} style={{}} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Proyecto">
          <div style={{ pointerEvents: "none" }}>
            <img
              src="https://res.cloudinary.com/aca-geek/image/upload/v1655756956/PORTAFOLIO/VisualizadorGithub_qaktcn.png"
              className="Image"
              width="280px"
              height='100px'
              alt=""
            />
            <div className="Info">
              <h1 style={{ fontWeight: "500" }}>Github Info</h1>
              <h2 style={{marginBottom:'4.5rem'}}>
                Aqui podras encontrar a Cualquier persona dentro de Github
                Permitiendote añadirla a la lista, Editar su usuario Y Eliminarlo
              </h2>
              <div className="Tech">
                <h2>
                  {" "}
                  <SiJavascript
                    size={23}
                    style={{
                      marginBottom: ".8rem",
                      marginTop: ".1rem",
                    }}
                  />
                </h2>
                <h2>
                  <SiReact size={22} style={{}} />
                </h2>
                <h2>
                  <SiChakraui
                    size={25}
                    style={{
                      marginBottom: ".8rem",
                    }}
                  />
                </h2>
              </div>
              <div className="LinkProyectos">
                <a
                  style={{ color: "#cdcdff" }}
                  href="https://github.com/Francovo/Not_Spotify"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGithub size={23} />
                </a>
                <a
                  style={{ color: "#cdcdff" }}
                  href="https://prueba-tecnica-body-tech.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImShare size={23} style={{}} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
