import { useState } from 'react';
import QuizHeader from './components/QuizHeader';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';
import { questions } from './data/questions';
import './App.css';

type Page = 'home' | 'quiz' | 'result';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex];

  const handleStart = () => {
    setCurrentPage('quiz');
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  const handleSelect = (choice: string) => {
    setSelectedAnswer(choice);
  };

  const handleNext = () => {
    if (selectedAnswer === currentQuestion.choices[currentQuestion.correctAnswer]) {
      setScore(prev => prev + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setCurrentPage('result');
    }
  };

  const handleRetake = () => {
    setCurrentPage('quiz');
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  const handleHome = () => {
    setCurrentPage('home');
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  if (currentPage === 'home') {
    return (
      <div className="home-container">
        <div className="home-icon">📱</div>
        <h1>Digital Marketing Quiz</h1>
        <p className="home-subtitle">Test your knowledge of digital marketing concepts</p>
        <button className="start-btn" onClick={handleStart}>Start Quiz</button>
      </div>
    );
  }

  if (currentPage === 'result') {
    return (
      <ResultCard
        score={score}
        total={questions.length}
        onRetake={handleRetake}
        onHome={handleHome}
      />
    );
  }

  return (
    <>
      <QuizHeader
        title="Digital Marketing Quiz"
        subtitle={`Question ${currentIndex + 1} of ${questions.length}`}
      />
      <ProgressBar
        current={currentIndex + 1}
        total={questions.length}
      />
      <QuestionCard
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        selectedAnswer={selectedAnswer}
        onSelect={handleSelect}
      />
      <div className="nav-buttons">
        <button
          className="next-btn"
          onClick={handleNext}
          disabled={!selectedAnswer}
        >
          {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </>
  );
}