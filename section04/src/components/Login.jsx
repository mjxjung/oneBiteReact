import React, {useState} from "react";
import logo from "../assets/yonsei_logo.png";
import "../Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputValue, setinputValue] = useState('');
  const [id, setId] = useState('');

  const idhandleChange = (event) => {
    setId(event.target.value);
  };

  const handleChange = (event) => {
    setinputValue(event.target.value);
  };

  const nav = useNavigate();
  const onClickButton = () => {
    nav("/");
  };

  return (
    <>
      <div className="logopage">
        <div
          style={{
            display: "inline",
            color: "white",
            fontWeight: "150",
            margin: "50px",
            marginTop: "30px",
          }}
        >
          <h1 style={{ fontSize: "40px", marginBottom: "-15px" }}>
            나의 연세인<br />나의 미래를 만든다!
          </h1>
          <h3 style={{ fontWeight: "10" }}>진리와 자유를 향한 연세의 도전</h3>
        </div>
      </div>

      <div className="login">
        <img className="yonsei_logo" onClick={onClickButton} src={logo} alt="Yosei Logo"/>
        <h3 style={{ color: "rgb(105, 105, 105)", fontWeight: "10"}}>
        ※ 기존 연세포털(https://portal.yonsei.ac.kr)의 비밀번호로 로그인<br />해 주십시오.
        </h3>
        <input type="text" placeholder="    학번(교번) (ID No.)" value={id} onChange={idhandleChange}      />
        <input type="text" placeholder="    비밀번호 (Password)" value={inputValue} onChange={handleChange}      />
        <p style={{ fontSize: "19px" }}>로그인 정보 {'>'} ID : 교직원 번호, 초기비밀번호 : 생년월일 6자리<br/>INFO {'>'} ID : Employee number, Init PW: BirthDay (6 digit)</p>
        
        <button className="loginButton">로그인 (Login)</button>
      </div>
    </>
  )
}

export default Login;