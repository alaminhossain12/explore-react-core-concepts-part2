import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";

function App() {
  function handleClicked() {
    alert("Clicked Me");
  }
  const handleClickedTwo = () => {
    alert("Clicked Me Two");
  };
  const handleClickedThree = () => {
    alert("Clicked Me Three");
  };
  function addFour(num) {
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core Concepts</h1>
      <Friends></Friends>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClicked}>Clicked Me</button>
      <button onClick={handleClickedTwo}>Clicked Two</button>
      <button onClick={handleClickedThree}>Button Three</button>
      <button onClick={() => addFour(5)}>Button Four</button>
    </>
  );
}

export default App;
