import { PROFILE } from "../data.js";
import { useReveal } from "../hooks.js";

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contacto" className="section reveal" ref={ref}>
      <div className="wrap">
        <p className="label">04 — Contacto</p>
        <h2 className="big">¿Trabajamos juntos?</h2>
        <p className="lead">Si tienes una vacante, práctica o proyecto, escríbeme.</p>
        <a className="mail" href={"mailto:" + PROFILE.email}>{PROFILE.email}</a>
        <p><a className="link" href={PROFILE.github} target="_blank" rel="noopener noreferrer">github.com/Aldair-Canul ↗</a></p>
      </div>
    </section>
  );
}
