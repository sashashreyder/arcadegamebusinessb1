import { presentTenses } from "./presentTenses";
import { pastTenses } from "./pastTenses";
import { futureTenses } from "./futureTenses";
import { passiveVoice } from "./passiveVoice";
import { conditionals } from "./conditionals";
import type { Exercise } from "./types";

export type ExerciseSet = {
  id: string;
  title: string;
  description: string;
  data: Exercise[];
};

export const exerciseSets: ExerciseSet[] = [
  {
    id: "present",
    title: "Present Tenses",
    description: "15 вопросов: Simple, Continuous, Perfect, Perfect Continuous",
    data: presentTenses,
  },
  {
    id: "past",
    title: "Past Tenses",
    description: "15 вопросов: Simple, Continuous, Perfect, Perfect Continuous",
    data: pastTenses,
  },
  {
    id: "future",
    title: "Future Tenses",
    description: "15 вопросов: Simple, Continuous, Perfect, Perfect Continuous",
    data: futureTenses,
  },
  {
    id: "passive",
    title: "Passive Voice",
    description: "7 вопросов по разным временам в страдательном залоге",
    data: passiveVoice,
  },
  {
    id: "conditionals",
    title: "Conditionals",
    description: "7 вопросов: Zero и First Conditional",
    data: conditionals,
  },
];

