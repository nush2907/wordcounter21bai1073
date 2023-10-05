import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  return (
    <div className="word-counter">
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
      />
      <div className="word-count">
        Word Count: {wordCount}
      </div>
    </div>
  );
};

export default WordCounter;
