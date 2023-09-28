import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { CircularProgress } from "@mui/material";
import { Question } from "../../components";
const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQuestion, setCurrentQuestion] = useState(0);


  // shuffling options as we are receiving current and incorrect answer differently
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffleOption([
          questions[currQuestion]?.correct_answer,
          ...questions[currQuestion]?.incorrect_answer,
        ])
    );
  }, [questions,currQuestion]);

  const handleShuffleOption = (optionsFromQues) => {
    return optionsFromQues.sort(() => Math.random() - 0.5);
  };

  console.log(options);

  return (
    <div className="quiz__container">
      <span className="quiz__subtitle">Welcome, {name}</span>
      {questions ? (
        <>
          <div className="quiz__info">
            <span>Difficulty: {questions[currQuestion].difficulty}</span>
            <span>Score: {score}</span>
          </div>
          <div>
          <label for="vol">Progress (Question {currQuestion+1} of {questions.length}):</label>
  <input type="range" value={currQuestion} min={0} max={questions.length}/>
          </div>
          <Question
            currQuestion={currQuestion}
            setCurrentQuestion={setCurrentQuestion}
            score={score}
            setScore={setScore}
            questions={questions}
            setQuestions={setQuestions}
            options={options}
            correct={questions[currQuestion]?.correct_answer}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100, color: "inherit" }}
          size={150}
        />
      )}
    </div>
  );
};

export default Quiz;
