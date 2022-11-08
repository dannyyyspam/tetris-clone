import "./index.css";
import Game from "./components/Game/Game";

export default function App() {
  return (
    <div className="App">
      <Game rows={20} columns={10} />
    </div>
  );
}
