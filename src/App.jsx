/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./App.css";
import Question from "./Question";
import Start from "./Start";
import data from "./data";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [questions, setQuestions] = useState(
    data.map((old) => ({
      ...old,
      id: nanoid(),
      allAnswers: shuffleArray([old.correct_answer, ...old.incorrect_answers]),
      buttonClicked: "",
    }))
  );
  const [gameStarted, setGameStarted] = useState(-1);
  const [score, setScore] = useState(0);

  function startGame() {
    setGameStarted(1);
    setScore(0);
    setQuestions((data) =>
      data.map((old) => ({
        ...old,
        id: nanoid(),
        allAnswers: shuffleArray([
          old.correct_answer,
          ...old.incorrect_answers,
        ]),
        buttonClicked: "",
      }))
    );
  }

  function shuffleArray(arr) {
    const correct = arr[0];
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    for (let i = 0; i < 4; i++) if (correct === arr[i]) arr.push(i);
    return arr;
  }

  function clickButton(event, id) {
    setQuestions((oldQuestions) =>
      oldQuestions.map((old) => {
        return id === old.id
          ? { ...old, buttonClicked: event.target.name }
          : old;
      })
    );
  }

  function submitAnswers() {
    const allSelected = questions.every((item) => item.buttonClicked !== "");
    if (allSelected) {
      setGameStarted(0);
      var count = 0;
      questions.forEach((item) =>
        item.correct_answer === item.buttonClicked ? count++ : (count += 0)
      );
      setScore(count);
    }
  }

  const displayQuestions = questions.map((question) => {
    return (
      <Question
        key={question.id}
        id={question.id}
        question={question.question}
        answers={question.allAnswers}
        correctAnswer={question.correct_answer}
        buttonClicked={question.buttonClicked}
        handleClick={clickButton}
        gameState={gameStarted}
      />
    );
  });

  return (
    <div>
      <svg
        className="top-right"
        xmlns="http://www.w3.org/2000/svg"
        width="158"
        height="141"
        viewBox="0 0 158 141"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M63.4095 81.3947C35.1213 50.8508 -2.68211 21.7816 1.17274 -19.6933C5.43941 -65.599 39.854 -105.359 82.4191 -123.133C122.797 -139.994 170.035 -130.256 205.822 -105.149C235.947 -84.0141 236.823 -43.8756 246.141 -8.27104C256.17 30.0508 282.521 70.8106 260.501 103.779C237.538 138.159 188.991 143.432 147.931 138.768C112.318 134.723 87.7505 107.677 63.4095 81.3947Z"
          fill="#FFFAD1"
        />
      </svg>
      <svg
        className="bottom-left"
        xmlns="http://www.w3.org/2000/svg"
        width="148"
        height="118"
        viewBox="0 0 148 118"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-5.55191 4.90596C35.9614 1.77498 82.2425 -9.72149 112.306 19.1094C145.581 51.0203 155.282 102.703 142.701 147.081C130.767 189.18 93.7448 220.092 51.8208 232.476C16.5281 242.902 -15.4332 218.605 -49.1007 203.738C-85.3375 187.737 -133.641 182.993 -145.741 145.239C-158.358 105.868 -132.269 64.5881 -103.064 35.3528C-77.7328 9.99541 -41.2727 7.60006 -5.55191 4.90596Z"
          fill="#DEEBF8"
        />
      </svg>
      {gameStarted === -1 ? (
        <Start handleClick={startGame} />
      ) : (
        <div className="questions">
          {displayQuestions}
          {gameStarted === 1 ? (
            <button className="check-answers" onClick={submitAnswers}>
              Check Answers
            </button>
          ) : (
            <div className="results">
              <h3 className="score">You scored {score}/5 correct answers</h3>
              <button className="play-again" onClick={startGame}>
                Play Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
