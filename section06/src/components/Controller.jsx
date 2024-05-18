import "./Controller.css";

const Controller = ({ onClickButton, resetButton }) => {
  return (
    <div>
      <button className="Count"
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button className="Count"
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button className="Count"
        onClick={() => {
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button className="Count"
        onClick={() => {
          onClickButton(1);
        }}
      >
        +1
      </button>
      <button className="Count"
        onClick={() => {
          onClickButton(10);
        }}
      >
        +10
      </button>
      <button className="Count"
        onClick={() => {
          onClickButton(100);
        }}
      >
        +100
      </button>
      <button className="Count Reset"
      onClick={resetButton}>Reset</button>
    </div>
  );
};

export default Controller;
