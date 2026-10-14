import React from 'react';
import AnswerOption from './AnswerOption';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedAnswer: string | null;
  onSelect: (choice: string) => void;
}

const letters = ["A", "B", "C", "D"];

export default function QuestionCard({ question, questionNumber, selectedAnswer, onSelect }: QuestionCardProps) {
  return (
    <section className="question-card">
      <div className="question-label">QUESTION {questionNumber}</div>
      <h2>{question.question}</h2>
      <p className="select-hint">Select one answer below.</p>
      <div className="answers-list">
        {question.choices.map((choice, index) => (
          <AnswerOption
            key={index}
            letter={letters[index]}
            text={choice}
            selected={selectedAnswer === choice}
            onClick={() => onSelect(choice)}
          />
        ))}
      </div>
    </section>
  );
}
