import React from 'react';

interface QuizHeaderProps {
  title: string;
  subtitle?: string;
}

export default function QuizHeader({ title, subtitle }: QuizHeaderProps) {
  return (
    <header className="quiz-header">
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
}
