import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedType, setSelectedType] = useState('');
  const [text, setText] = useState('');

  const problemTypes = [
    "주제문제", "제목문제", "의미추론문제", "내용일치문제", "내용불일치문제",
    "어휘문제", "빈칸문제", "순서문제", "문장삽입문제", "요약문 빈칸문제",
    "동의어 반의어", "내용구조화"
  ];

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleGenerate = () => {
    // 여기에 생성 로직을 구현합니다.
    console.log("Selected Type:", selectedType);
    console.log("Text:", text);
  };

  return (
    <div className="App">
      <h1>Kailey English</h1>
      
      <div className="problem-types">
        <h2>문제 유형</h2>
        {problemTypes.map((type, index) => (
          <label key={index}>
            <input
              type="radio"
              value={type}
              checked={selectedType === type}
              onChange={handleTypeChange}
              name="problemType"
            />
            {type}
          </label>
        ))}
      </div>

      <div className="text-input">
        <h2>텍스트 입력</h2>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="지문을 입력하세요"
          rows={10}
        />
      </div>

      <button onClick={handleGenerate}>생성</button>
    </div>
  );
}

export default App;

