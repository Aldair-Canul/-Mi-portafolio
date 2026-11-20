import { SKILLS } from "../data.js";
import { useReveal } from "../hooks.js";

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="habilidades" className="section reveal" ref={ref}>
      <div className="wrap">
        <p className="label">02 — Herramientas</p>
        <h2>Habilidades</h2>
        <dl className="skills">
          {SKILLS.map((s) => (
            <div key={s.title}>
              <dt>{s.title}</dt>
              <dd>{s.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
