import { SECTIONS } from "../data.js";

export default function Header() {
  return (
    <header className="top">
      <div className="wrap top-in">
        <a href="#inicio" className="brand">Aldair Canul</a>
        <nav>
          {SECTIONS.map(([id, label]) => <a key={id} href={"#" + id}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
