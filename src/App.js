import "./App.css";
import CurrentsAPI from "./components/CurrentsAPI/CurrentsAPI";

function App() {
  const backgroundStyle = {
    backgroundImage: "url(/img/background/1.jpg)"
  };

  return (
    <CurrentsAPI />
    /*  <div className="App">
      <section className="fundoBody" style={backgroundStyle}></section>
      <textarea style={{ height: "6000px" }}>Testando fundo </textarea>
    </div> */
  );
}

export default App;
