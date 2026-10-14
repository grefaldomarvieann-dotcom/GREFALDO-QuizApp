import React from 'react';

interface AnswerOptionProps {
  letter: string;
  text: string;
  selected: boolean;
  onClick: () => void;
}

export default function AnswerOption({ letter, text, selected, onClick }: AnswerOptionProps) {
  return (
    <button 
      className={`answer-option ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <span className="option-letter">{letter}</span>
      <span className="option-text">{text}</span>
    </button>
  );
}

