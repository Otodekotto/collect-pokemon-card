import "./App.css";
import ContentBackground from "./component/landing/ContentBackground";
import EnteringAnimation from "./component/landing/EnteringAnimation";
import PokemonToCatch from "./component/landing/PokemonToCatch";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <EnteringAnimation></EnteringAnimation>
      <ContentBackground></ContentBackground>
      <PokemonToCatch></PokemonToCatch>
    </div>
  );
}

export default App;
