import { useState, useEffect } from "react";
import type { Exercise } from "../data/types";
import { shuffle } from "../utils/shuffle";
import { pluralizeMistakes } from "../utils/pluralize";
import styles from "./ArcadeMode.module.css";

type Props = {
  exercises: Exercise[];
  onExit: () => void;
};

export default function ArcadeMode({ exercises, onExit }: Props) {
  const [questions, setQuestions] = useState<Exercise[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ tense: string; correct: boolean }[]>(
    []
  );
  const [selected, setSelected] = useState<string | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    setQuestions(shuffle(exercises));
  }, [exercises]);

  useEffect(() => {
    if (timeLeft > 0 && index < questions.length) {
      const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, index, questions.length]);

  if (index >= questions.length || timeLeft === 0) {
    const total = questions.length;
    const mistakes = answers.filter((a) => !a.correct);
    const mistakesByTense = mistakes.reduce<Record<string, number>>(
      (acc, m) => {
        acc[m.tense] = (acc[m.tense] || 0) + 1;
        return acc;
      },
      {}
    );

    return (
      <div className={styles.gameOver}>
        <h2>Игра окончена 🎉</h2>
        <p>
          Вы ответили правильно на {score} из {total} вопросов
        </p>
        {Object.keys(mistakesByTense).length > 0 ? (
          <div>
            <p className={styles.recommend}>Рекомендуем повторить темы:</p>
            <ul>
              {Object.entries(mistakesByTense).map(([tense, count]) => (
                <li key={tense}>
                  {tense} — {count} {pluralizeMistakes(count)}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className={styles.success}>Отличный результат!</p>
        )}
        <button onClick={onExit} className={styles.exitButton}>
          🔙 Вернуться в меню
        </button>
      </div>
    );
  }

  const q = questions[index];

  const handleAnswer = (option: string) => {
    if (selected) return;
    const correct = option === q.answer;
    if (correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { tense: q.tense, correct }]);
    setSelected(option);
    setShowTranslation(true);
  };

  const next = () => {
    setIndex((i) => i + 1);
    setSelected(null);
    setShowTranslation(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.topBar}>
          <h2>
            Вопрос {index + 1} из {questions.length}
          </h2>
          <button onClick={onExit} className={styles.exitButton}>
            ❌ Выйти
          </button>
        </div>
        <div className={styles.stats}>
          <span>⏱ {timeLeft}s</span>
          <span>⭐ {score}</span>
        </div>
        <p className={styles.sentence}>{q.sentence}</p>
        <div className={styles.options}>
          {q.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={!!selected}
              className={`${styles.option} ${
                selected
                  ? option === q.answer
                    ? styles.correct
                    : option === selected
                    ? styles.wrong
                    : styles.disabled
                  : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {showTranslation && (
          <div className={styles.translation}>
            <p>
              <strong>Перевод:</strong> {q.translation}
            </p>
          </div>
        )}
        {selected && (
          <button onClick={next} className={styles.nextButton}>
            Далее →
          </button>
        )}
      </div>
    </div>
  );
}


