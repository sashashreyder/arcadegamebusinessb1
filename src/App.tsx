import { useState } from "react";
import { exerciseSets } from "./data/exerciseSets";
import ExerciseSelector from "./components/ExerciseSelector";
import ArcadeMode from "./components/ArcadeMode";
import styles from "./App.module.css";

function App() {
  const [selected, setSelected] = useState<string | null>(null);

  if (selected) {
    const set = exerciseSets.find((s) => s.id === selected)!;
    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <span className={styles.title}>🎮 Grammar Arcade</span>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </header>
        <main className={styles.main}>
          <ArcadeMode exercises={set.data} onExit={() => setSelected(null)} />
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.title}>🎮 Grammar Arcade</span>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
      </header>
      <main className={styles.main}>
        <ExerciseSelector onSelect={setSelected} />
      </main>
    </div>
  );
}

export default App;




