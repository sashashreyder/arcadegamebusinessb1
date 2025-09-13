import type { Exercise } from "./types";

export const passiveVoice: Exercise[] = [
  {
    id: "passive-present-simple",
    tense: "Passive Present Simple",
    sentence: "The reports ____ (to prepare) every Monday.",
    options: ["are prepared", "were prepared", "will be prepared", "is preparing"],
    answer: "are prepared",
    translation: "Отчёты готовятся каждый понедельник."
  },
  {
    id: "passive-past-simple",
    tense: "Passive Past Simple",
    sentence: "The contract ____ (to sign) yesterday.",
    options: ["was signed", "is signed", "will be signed", "has been signed"],
    answer: "was signed",
    translation: "Контракт был подписан вчера."
  },
  {
    id: "passive-present-continuous",
    tense: "Passive Present Continuous",
    sentence: "Right now the documents ____ (to check).",
    options: ["are being checked", "were checked", "is checked", "will be checked"],
    answer: "are being checked",
    translation: "Прямо сейчас документы проверяются."
  },
  {
    id: "passive-future-simple",
    tense: "Passive Future Simple",
    sentence: "The presentation ____ (to show) tomorrow.",
    options: ["will be shown", "is shown", "was shown", "has been shown"],
    answer: "will be shown",
    translation: "Презентация будет показана завтра."
  },
  {
    id: "passive-present-perfect",
    tense: "Passive Present Perfect",
    sentence: "The results ____ (to publish) already.",
    options: ["have been published", "are published", "were published", "will be published"],
    answer: "have been published",
    translation: "Результаты уже опубликованы."
  },
  {
    id: "passive-past-continuous",
    tense: "Passive Past Continuous",
    sentence: "At that moment the data ____ (to analyze).",
    options: ["was being analyzed", "is being analyzed", "were analyzed", "will be analyzed"],
    answer: "was being analyzed",
    translation: "В тот момент данные анализировались."
  },
  {
    id: "passive-future-perfect",
    tense: "Passive Future Perfect",
    sentence: "By next week the plan ____ (to approve).",
    options: ["will have been approved", "is approved", "was approved", "has been approved"],
    answer: "will have been approved",
    translation: "К следующей неделе план будет утверждён."
  }
];
