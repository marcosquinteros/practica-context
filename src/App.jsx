import "./App.css";
import Login from "./components/Login";
import Registro from "./components/Registro";
import ContextDate from "./context/ContextDate";

function App() {
  return (
    <ContextDate>
      <Login />
      <Registro />
    </ContextDate>
  );
}

export default App;
