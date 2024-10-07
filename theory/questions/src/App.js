import React from "react";
import QApp from "./components/QApp";
import Result from "./components/Result";

const questions = [
  {
    title: "React - это",
    variants: ["фреймворк", "ствол", "дуплет"],
    correct: 0,
  },
  {
    title: "Как меня зовут?",
    variants: ["Никита", "Рубль", "Саня"],
    correct: 0,
  },
  {
    title: "Столица России",
    variants: ["Москва", "Барнаул", "Заринск"],
    correct: 0,
  },
  {
    title: "Nokia - это...",
    variants: ["наушники", "телефон", "зубочистка"],
    correct: 1,
  },
  {
    title: "react - it's...",
    variants: ["framework", "work", "apple"],
    correct: 0,
  },
  {
    title: "Чем стилизуют страницы",
    variants: ["react", "js", "css"],
    correct: 2,
  },
  {
    title: "Javascript - это...",
    variants: ["framework", "язык программирования", "фрукт"],
    correct: 1,
  },
];

let doneAnswer = 0;

export default function App() {
  const [step, setStep] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    questions[step].correct === index && doneAnswer++;
  };

  return (
    <div className="container">
      {step < 7 ? (
        <QApp
          arr={questions}
          step={step}
          question={question}
						clickVariant={onClickVariant}
					/>
      ) : (
        <Result result={doneAnswer}/>
      )}
    </div>
  );
}
