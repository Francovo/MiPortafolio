import React, { useRef, useState } from "react";
import "../styles/Contacto.scss";
import emailjs from "emailjs-com";

export const Contacto = () => {
  let formRef = useRef(null);

  const SendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sd01888",
        "template_ycvv64p",
        formRef.current,
        "YBV0_Hv0-KOZqeMtz"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div id="Contacto">
      <h2>Pongamonos en Contacto :D</h2>
      <form ref={formRef} onSubmit={SendEmail} className="form_Contacto">
        <input placeholder="Nombre" id="nombre" name="nombre" required />
        <input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          required
        />
        <textarea
          placeholder="Mensaje"
          id="mensaje"
          name="mensaje"
          required
          maxLength="300"
        />
        <a href="#modal" type="submit" className="Btn_Contacto">
          Enviar
        </a>
      </form>
    </div>
  );
};
