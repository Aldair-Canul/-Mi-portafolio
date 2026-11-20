import { PROFILE, STATS } from "../data.js";
import { img } from "../assets.js";
import { useCount } from "../hooks.js";

function Stat({ value, label }) {
  const [n, ref] = useCount(value);
  return (
    <div className="stat" ref={ref}>
      <b>{n}</b>
      <span>{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Ingeniería en Tecnología de Software · UACAM</p>
            <h1>Construyo <em>videojuegos</em> y experiencias web.</h1>
            <p className="lead">
              Soy Aldair Canul. Este semestre desarrollé un videojuego narrativo con Godot, sitios de divulgación y un
              minijuego, trabajando en equipo con Git y GitHub.
            </p>
            <div className="btns">
              <a className="btn solid" href="#proyectos">Ver proyectos</a>
              <a className="btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>
          <figure className="photo">
            <img src={img(PROFILE.photo)} alt="Foto de Aldair Canul" />
          </figure>
        </div>
        <div className="stats">
          {STATS.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
