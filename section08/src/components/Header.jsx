import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
    )
}

export default Header;
// 새로운 date객체를 생성. toDateSpring 메소드를 호출
