import React from 'react';
import "../service.css";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/login");
  };
  return (
    <>
      <div className="service">
        <h1 style={{margin: "40px", textDecoration: "underline"}}>YONSEI SERVICE</h1>
        <div className='menuYonsei'>
          <h3 onClick={onClickButton}>학사정보시스템</h3>
          <h3 onClick={onClickButton}>학부 수강신청</h3>
          <h3 onClick={onClickButton}>대학원 수강신청</h3>
          <h3 onClick={onClickButton}>수강편람조회</h3>
          <h3 onClick={onClickButton}>성적평가조회</h3>
          <h3 onClick={onClickButton}>온라인강의<br />(LearnUs)</h3>
        </div>  
      </div>
      <div className="serviceIT">
        <h1 style={{margin: "40px", textDecoration: "underline"}}>IT SERVICE</h1>
        <div className='menuIT'>
          <h3 onClick={onClickButton}>인터넷증명서</h3>
          <h3 onClick={onClickButton}>웹메일</h3>
          <h3 onClick={onClickButton}>신촌 IT서비스</h3>
          <h3 onClick={onClickButton}>미래 IT서비스</h3>
          <h3 onClick={onClickButton}>국제캠퍼스<br />셔틀버스</h3>
          <h3 onClick={onClickButton}>미래 통학버스</h3>
        </div>
      </div>
    </>
  )
}

export default Service;