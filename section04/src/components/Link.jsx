import React from 'react';
import '../link.css';
import { useNavigate } from "react-router-dom";

const Link = () => {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/login");
  };

  return (
    <>
      <div className="serviceH">
        <h1 style={{margin: "40px", textDecoration: "underline"}}>학사 LINK</h1>
        <div className='menuH'>
          <h3 onClick={onClickButton}>전자출결</h3>
          <h3 onClick={onClickButton}>온라인강의(LearnUs)</h3>
          <h3 onClick={onClickButton}>학부모서비스</h3>
          <h3 onClick={onClickButton}>대학원입학지원</h3>
          <h3 onClick={onClickButton}>Inbound 교환학생 신청</h3>
          <h3 onClick={onClickButton}>학생증발급</h3>
        </div>  
      </div>
      <div className="serviceAdmin">
        <h1 style={{margin: "40px", textDecoration: "underline"}}>행정 LINK</h1>
        <div className='menuAdmin'>
          <h3 onClick={onClickButton}>ERP 행정정보시스템</h3>
          <h3 onClick={onClickButton}>윤리센터</h3>
          <h3 onClick={onClickButton}>연구관리</h3>
          <h3 onClick={onClickButton}>YRI(통합연구업적)</h3>
          <h3 onClick={onClickButton}>공간대관시스템</h3>
          <h3 onClick={onClickButton}>신분증 발급</h3>
          <h3 onClick={onClickButton}>협업시스템(그룹웨어)</h3>
        </div>  
      </div>
    </>
  )
}

export default Link;