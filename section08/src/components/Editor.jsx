import React, { useState } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content.trim()) { // 내용이 비어있지 않은 경우에만 추가
      onCreate(content);
      setContent(""); // 내용 추가 후 입력 필드 초기화
    }
  };

  return (
    <div className="Editor">
      <input
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 ToDo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default Editor;
