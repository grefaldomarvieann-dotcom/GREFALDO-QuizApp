import React from 'react';

interface ResultCardProps {
  score: number;
  total: number;
  onRetake: () => void;
  onHome: () => void;
}

export default function ResultCard({ score, total, onRetake, onHome }: ResultCardProps) {
  const percentage = Math.round((score / total) * 100);
  
  return (
    <div className="result-card">
      <h2>Quiz Complete!</h2>
      <div className="score-display">
        <p className="score-text">You scored</p>
        <p className="score-number">{score} / {total}</p>
        <p className="score-percent">{percentage}%</p>
      </div>
      <div className="result-buttons">
        <button className="btn retake-btn" onClick={onRetake}>Retake Quiz</button>
        <button className="btn home-btn" onClick={onHome}>Return Home</button>
      </div>
    </div>
  );
}
