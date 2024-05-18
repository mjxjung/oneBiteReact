import "./Viewer.css";

const Viewer = ({count, clicks}) => {

  return <div>
    <h3>현재 카운트 :</h3>
    <h1 className="Counter">{count}</h1>
    <h4 className="Clicker">클릭 횟수: </h4>
    <h1 className="Clicker">{clicks}</h1>

  </div>
};

export default Viewer;