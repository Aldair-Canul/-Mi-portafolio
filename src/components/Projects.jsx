import { useState } from "react";
import { FILTERS, PROJECTS } from "../data.js";
import { img } from "../assets.js";
import { useReveal } from "../hooks.js";
import Shot from "./Shot.jsx";

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const [open, setOpen] = useState(null);
  const ref = useReveal();
  const list = PROJECTS.filter((p) => filter === "Todos" || p.tags.includes(filter));

  return (
    <section id="proyectos" className="section reveal" ref={ref}>
      <div className="wrap">
        <p className="label">01 — Trabajo</p>
        <h2>Proyectos del semestre</h2>
        <div className="filters">
          {FILTERS.map((f) => (
            <button key={f} className={filter === f ? "on" : ""} onClick={() => { setFilter(f); setOpen(null); }}>{f}</button>
          ))}
        </div>
        <ul className="plist">
          {list.map((p, i) => {
            const isOpen = open === p.id;
            return (
              <li key={p.id} className={isOpen ? "open" : ""}>
                <button className="prow" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : p.id)}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ptitle">{p.title}</span>
                  <span className="ptags">{p.tags.join(" · ")}</span>
                  <span className="plus" aria-hidden="true" />
                </button>
                <div className="pbody">
                  <div className="pinner">
                    <div className="pgrid">
                      <Shot p={p} />
                      <div>
                        <p className="psum">{p.summary}</p>
                        <ul className="pts">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
                        {p.gallery && (
                          <div className="gallery">
                            {p.gallery.map((g) => <img key={g} src={img(g)} alt="" loading="lazy" />)}
                          </div>
                        )}
                        <a className="btn solid" href={p.url} target="_blank" rel="noopener noreferrer">{p.cta} ↗</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
