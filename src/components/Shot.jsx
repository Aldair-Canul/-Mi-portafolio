import { img } from "../assets.js";

// Imagen de portada de un proyecto (logos o captura)
export default function Shot({ p }) {
  const cls = "shot" + (p.logos ? " light" : p.contain ? " dark" : "");
  return (
    <div className={cls}>
      {p.logos ? (
        <div className="logos">{p.logos.map((l) => <img key={l} src={img(l)} alt="" />)}</div>
      ) : (
        <img
          className={p.contain ? "contain" : "fill"}
          src={img(p.cover)}
          alt={p.title}
          loading="lazy"
          style={p.pos ? { objectPosition: p.pos } : undefined}
        />
      )}
    </div>
  );
}
