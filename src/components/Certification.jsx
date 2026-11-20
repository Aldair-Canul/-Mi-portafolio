import { img } from "../assets.js";
import { useReveal } from "../hooks.js";

export default function Certification() {
  const ref = useReveal();
  return (
    <section id="certificacion" className="section reveal" ref={ref}>
      <div className="wrap">
        <p className="label">03 — Formación</p>
        <h2>Certificación</h2>
        <div className="cert">
          <img src={img("ccna-badge.png")} alt="Insignia Cisco Networking Academy: CCNA Introducción a las redes" />
          <div>
            <h3>CCNA: Introducción a las redes</h3>
            <p>Insignia verificada de Cisco Networking Academy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
