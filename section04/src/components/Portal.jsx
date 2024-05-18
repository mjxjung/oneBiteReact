import React from "react";
import logo from "../assets/yonsei_logo.png";
import "../portal.css";
import { useNavigate } from "react-router-dom";

const Portal = () => {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/login");
  };

  return (
    <>
      <div className="portalLogo">
        <img
          src={logo}
          alt="Yosei Logo"
          style={{
            width: "100px",
            height: "100px",
            margin: "50px",
            marginRight: "14px",
          }}
        />
        <div
          style={{
            display: "inline",
            color: "white",
            fontWeight: "150",
            marginTop: "50px",
          }}
        >
          <h1 style={{ fontSize: "30px", marginBottom: "-20px" }}>
            연세포털서비스
          </h1>
          <h3 style={{ fontWeight: "10" }}>YONSEI PORTAL SERVICE</h3>
        </div>
      </div>
      <div className="portalLogin">
        <h1 style={{ fontWeight: "10", marginBottom: "-40px" }}>
          진리와 자유를 향한 연세의 도전
        </h1>
        <h1 style={{ fontSize: "60px" }}>YONSEI PORTAL</h1>
        <button onClick={onClickButton} className="portalLoginButton">로그인 (Login)</button>
      </div>
    </>
  );
};

export default Portal;
