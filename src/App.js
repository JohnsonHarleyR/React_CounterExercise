// import counter component
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* insert counter component */}
      <Counter />
      Another...
      <Counter />
      <Switch />
    </div>
  );
}
