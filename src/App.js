// import counter component
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* insert counter component */}
      <Counter />
      Another...
      <Counter />
    </div>
  );
}
