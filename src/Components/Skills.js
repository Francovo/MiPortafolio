import React from 'react'
import {AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiMaterialui,
  SiChakraui,
  SiSass,
  SiGit,
  SiFirebase,
  SiRedux
} from "react-icons/si";
import "../styles/Skills.scss"

const Skills = () => {
  return (
    <div className="Skills" id="Skills">
    <h1>Skills</h1>
    <ul className="ContainerSkill">
      <li className="Skill">
        <AiFillHtml5
          size={30}
          style={{ marginBottom: ".6rem", pointerEvents: "none" }}
        />
        HTML
      </li>
      <li className="Skill">
        <SiCss3
          size={26}
          style={{
            marginBottom: ".8rem",
          }}
        />
        CSS
      </li>
      <li className="Skill">
        <SiJavascript
          size={23}
          style={{
            marginBottom: ".8rem",
            marginTop: ".1rem",
          }}
        />
        JavaScript
      </li>
      <li className="Skill">
        <SiReact
          size={27}
          style={{
            marginBottom: ".6rem",
          }}
        />
        ReactJs
      </li>
      <li className="Skill">
        <SiFirebase
          size={27}
          style={{
            marginBottom: ".6rem",
          }}
        />
        Firebase
      </li>
      <li className="Skill">
        <SiRedux
          size={27}
          style={{
            marginBottom: ".6rem",
          }}
        />
        Redux
      </li>
      <li className="Skill">
        <SiMaterialui
          size={25}
          style={{
            marginBottom: ".2rem",
          }}
        />
        Material UI
      </li>
      <li className="Skill">
        <SiChakraui
          size={25}
          style={{
            marginBottom: ".8rem",
          }}
        />
        Chakra UI
      </li>
      <li className="Skill">
        <SiSass
          size={25}
          style={{
            marginBottom: ".8rem",
          }}
        />
        SASS
      </li>
      <li className="Skill">
        <SiGit
          size={25}
          style={{
            marginBottom: ".8rem",
          }}
        />
        GIT
      </li>
    </ul>
  </div>  )
}

export default Skills