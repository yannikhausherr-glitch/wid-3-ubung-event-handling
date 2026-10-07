import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Event Handling</h1>
      <button
        id="button1"
        onClick={(e) => {
          console.log(e.target.id);
        }}
        onMouseEnter={() => {
          console.log("Maus Enter");
        }}
        onMouseLeave={() => {
          console.log("Maus Leave");
        }}
      >
        Klick mich
      </button>
      <input
        type="checkbox"
        placeholder="Eingabetext"
        onChange={(e) => {
          console.log(e.target.checked);
        }}
      ></input>
      <input
        type="text"
        onKeyDown={(e) => {
          console.log(e.key);
        }}
      ></input>
    </div>
  );
}
