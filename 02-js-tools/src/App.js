import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" />
      <Pet name="Chloe" animal="Cat" breed="Calico" />
      <Pet name="Allora" animal="Cat" breed="Short Haired Something" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
