import { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const courts = [
  { id: 1, name: "Court Arena", type: "Coberta", price: 28, color: "orange" },
  {
    id: 2,
    name: "Court Atlântica",
    type: "Ao ar livre",
    price: 24,
    color: "blue",
  },
  {
    id: 3,
    name: "Court Duna",
    type: "Ao ar livre",
    price: 24,
    color: "yellow",
  },
];
const slots = ["08:00", "09:30", "11:00", "16:00", "17:30", "19:00", "20:30"];
const dates = [
  { label: "Hoje", date: "24 AGO", value: "Hoje, 24 Ago" },
  { label: "Amanhã", date: "25 AGO", value: "Amanhã, 25 Ago" },
  { label: "Terça", date: "26 AGO", value: "Terça, 26 Ago" },
  { label: "Quarta", date: "27 AGO", value: "Quarta, 27 Ago" },
  { label: "Quinta", date: "28 AGO", value: "Quinta, 28 Ago" },
];

function App() {
  const [active, setActive] = useState("Reservar");
  const [date, setDate] = useState("Hoje, 24 Ago");
  const [court, setCourt] = useState(courts[0]);
  const [time, setTime] = useState("19:00");
  const [modal, setModal] = useState(false);
  const [notice, setNotice] = useState("");
  const [player, setPlayer] = useState({ name: "", email: "" });
  const total = useMemo(() => court.price + 2, [court]);
  const reserve = (event) => {
    event.preventDefault();
    setModal(false);
    setNotice(`Reserva confirmada — ${court.name}, ${date} às ${time}.`);
  };

  const selectNavigation = (item) => {
    setActive(item);
    if (item === "Reservar") {
      document.querySelector("#booking").scrollIntoView({ behavior: "smooth" });
      return;
    }
    setNotice(`${item} estará disponível em breve.`);
  };
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="BT ARG início">
          <span className="mark">BT</span>
          <span>ARG</span>
        </a>
        <nav>
          {["Reservar", "As minhas reservas", "Ranking"].map((item) => (
            <button
              key={item}
              className={active === item ? "nav-active" : ""}
              onClick={() => selectNavigation(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <button className="avatar" aria-label="Perfil">
          AS
        </button>
      </header>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">BEACH TENNIS · ALGARVE</p>
          <h1>
            O teu jogo
            <br />
            <em>começa na areia.</em>
          </h1>
          <p className="hero-text">
            Reserva o teu court, encontra a tua dupla e entra em campo.
          </p>
          <button
            className="primary"
            onClick={() =>
              document
                .querySelector("#booking")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Reservar agora <span>→</span>
          </button>
        </div>
        <div className="court-art" aria-hidden="true">
          <div className="sun"></div>
          <div className="net"></div>
          <div className="line line-a"></div>
          <div className="line line-b"></div>
          <div className="ball"></div>
          <p>BT ARG</p>
        </div>
      </section>
      <section className="booking" id="booking">
        <div className="section-heading">
          <div>
            <p className="eyebrow">RESERVA RÁPIDA</p>
            <h2>Escolhe o teu court.</h2>
          </div>
          <button className="date-button">
            ‹ <strong>{date}</strong> ›
          </button>
        </div>
        <div className="dates" aria-label="Escolher data">
          {dates.map((day) => (
            <button
              key={day.value}
              onClick={() => setDate(day.value)}
              className={date === day.value ? "selected-date" : ""}
              aria-pressed={date === day.value}
            >
              <span>{day.label}</span>
              <span>{day.date}</span>
            </button>
          ))}
        </div>
        <div className="court-grid">
          {courts.map((c) => (
            <button
              className={`court-card ${court.id === c.id ? "selected-card" : ""}`}
              key={c.id}
              onClick={() => setCourt(c)}
              aria-pressed={court.id === c.id}
            >
              <div className={`court-thumb ${c.color}`}>
                <i></i>
                <b>{c.id}</b>
              </div>
              <div className="court-info">
                <h3>{c.name}</h3>
                <p>{c.type}</p>
                <strong>
                  €{c.price}
                  <small> / 90 min</small>
                </strong>
              </div>
              <span className="check">✓</span>
            </button>
          ))}
        </div>
        <div className="time-area">
          <h3>Horário disponível</h3>
          <div className="slots">
            {slots.map((slot) => (
              <button
                key={slot}
                disabled={slot === "11:00" || slot === "16:00"}
                onClick={() => setTime(slot)}
                className={time === slot ? "selected-slot" : ""}
                aria-pressed={time === slot}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
        <div className="summary">
          <div>
            <span>A tua reserva</span>
            <strong>
              {court.name} · {date} · {time}
            </strong>
          </div>
          <div className="price">
            €{total}
            <small> total</small>
          </div>
          <button className="primary" onClick={() => setModal(true)}>
            Continuar <span>→</span>
          </button>
        </div>
      </section>
      <section className="community">
        <p className="eyebrow">MAIS DO QUE UM JOGO</p>
        <h2>
          A tua comunidade
          <br />
          na areia.
        </h2>
        <div className="stats">
          <div>
            <strong>+1.200</strong>
            <span>jogadores ativos</span>
          </div>
          <div>
            <strong>3</strong>
            <span>courts de areia</span>
          </div>
          <div>
            <strong>
              4.9 <b>★</b>
            </strong>
            <span>avaliação média</span>
          </div>
        </div>
      </section>
      <footer>
        <a className="brand" href="#top">
          <span className="mark">BT</span>
          <span>ARG</span>
        </a>
        <span>© 2026 BT ARG · Algarve, Portugal</span>
        <div>
          <a href="#booking">Reservas</a>
          <a href="#top">Instagram</a>
        </div>
      </footer>
      {notice && (
        <div className="toast" role="status">
          {notice}
          <button onClick={() => setNotice("")}>×</button>
        </div>
      )}
      {modal && (
        <div className="overlay" onClick={() => setModal(false)}>
          <form
            className="modal"
            onClick={(e) => e.stopPropagation()}
            onSubmit={reserve}
          >
            <button
              className="close"
              onClick={() => setModal(false)}
              aria-label="Fechar"
            >
              ×
            </button>
            <p className="eyebrow">QUASE LÁ</p>
            <h2>Confirma a reserva</h2>
            <p className="modal-copy">
              {court.name}
              <br />
              {date} às {time} · 90 minutos
            </p>
            <div className="modal-total">
              <span>Total</span>
              <strong>€{total}</strong>
            </div>
            <label className="field-label" htmlFor="player-name">
              Nome
            </label>
            <input
              id="player-name"
              className="field"
              value={player.name}
              onChange={(event) =>
                setPlayer({ ...player, name: event.target.value })
              }
              required
              autoComplete="name"
              placeholder="O teu nome"
            />
            <label className="field-label" htmlFor="player-email">
              Email
            </label>
            <input
              id="player-email"
              className="field"
              type="email"
              value={player.email}
              onChange={(event) =>
                setPlayer({ ...player, email: event.target.value })
              }
              required
              autoComplete="email"
              placeholder="nome@email.com"
            />
            <button className="primary wide" type="submit">
              Confirmar e pagar <span>→</span>
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
createRoot(document.getElementById("root")).render(<App />);
