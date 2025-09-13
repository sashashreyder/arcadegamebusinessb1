import React from "react";
import { exerciseSets } from "../data/exerciseSets";
import styles from "./ExerciseSelector.module.css";

type Props = {
  onSelect: (id: string) => void;
};

const ExerciseSelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Выберите тренировку</h1>
        <div className={styles.grid}>
          {exerciseSets.map((set) => (
            <button
              key={set.id}
              onClick={() => onSelect(set.id)}
              className={styles.option}
            >
              <h2>{set.title}</h2>
              <p>{set.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseSelector;
