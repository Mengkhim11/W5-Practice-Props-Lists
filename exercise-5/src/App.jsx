import { Info } from "./data";
import Profilecard from "./components/Profilecard.jsx";

export default function App() {
  return (
    <div className="app-container">
      <div className="card-grid">
        {Info.map((person) => (
          <Profilecard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}
