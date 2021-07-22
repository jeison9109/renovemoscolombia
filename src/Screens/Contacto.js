import React from "react";
import "./Formulario.css";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkwqnqa");
  if (state.succeeded) {
    return <p>Gracias por tu mensaje!!</p>;
  }
  return (
    <form
      method="POST"
      id="yeisonivanserna@gmail.com"
      action="https://formspree.io/f/xqkwqnqa"
      onSubmit={handleSubmit}
    >
      <div className="contenedor-form">
        <div className="row">
          <div class="col-25">
            <label htmlFor="full-name">Nombre</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="Nombre y Apellido"
              required="value"
            ></input>
          </div>
        </div>

        <div className="row">
          <div class="col-25">
            <label htmlFor="cedula">Cedula</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              name="name"
              id="cedula"
              placeholder="No de cedula"
              required="value"
            ></input>
          </div>
        </div>

        <div className="row">
          <div class="col-25">
            <label htmlFor="email">Correo</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="email@domain.com"
              required="value1"
            />
          </div>
        </div>

        <div className="row">
          <div class="col-25">
            <label htmlFor="celular">Celular</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="300 123 4567"
              required="value2"
            />
          </div>
        </div>

        <div className="row">
          <div class="col-25">
            <label for="department">Opciones</label>
          </div>
          <div class="col-75">
            <select name="department" id="department" required="">
              <option value="Select" selected="" disabled="">
                Select
              </option>
              <option value="Aportes">Aportes</option>
              <option value="Reuniones">Reuniones</option>
              <option value="Publicidad">Publicidad</option>
              <option value="Denuncias">Denuncias</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div class="col-25">
            <label htmlFor="message">Mensaje</label>
          </div>
          <div class="col-75">
            <textarea
              rows="8"
              cols="80"
              id="message"
              name="message"
              placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
            />
          </div>
        </div>

        <div className="row">
          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}

const Contacto = () => {
  return <ContactForm></ContactForm>;
};

export default Contacto;
