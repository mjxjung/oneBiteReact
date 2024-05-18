import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
    clickNum();
  };

  const clickNum = () => {
    setClicks(clicks + 1)
  }

  const resetButton = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} clicks={clicks}/>
      </section>

      <section>
        <Controller onClickButton={onClickButton} resetButton={resetButton} clickNum={clickNum} />
      </section>
    </div>
  );
}

export default App;
