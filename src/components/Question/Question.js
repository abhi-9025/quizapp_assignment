import React, { useEffect, useState } from "react";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Question = ({
  currQuestion,
  setCurrentQuestion,
  score,
  setScore,
  questions,
  setQuestions,
  options,
  correct,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(10);


  // A timer in seconds for a single Question once expired will return ans true answer and will have to procedd to next question
  useEffect(() => {
    let timerWatch = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setSelected(true);
      }
    }, 1000);

    return () => {
      clearTimeout(timerWatch);
    };
  }, [timer]);

  const navigate = useNavigate();

  // style based on option selected
  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "right";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "right";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  // handling when next question should appear

  const handleNext = () => {
    if (currQuestion >= questions.length - 1 && selected) {
      navigate("/result");
    } else if (selected) {
      setTimer(60);
      setCurrentQuestion(currQuestion + 1);
      setSelected();
    } else {
      setError("Please select an Option First");
    }
  };
  const handleQuit = () => {};

  return (
    <div className="question__container">
      <h1>Question : {currQuestion + 1}</h1>
      <div className="question__singleQuestionContainer">
        <h2>{questions[currQuestion].question}</h2>
        <h4 style={{ position: "relative", marginTop: 10, right: "-40%",color:'red' }}>
          Time:{timer}'s
        </h4>
        <div className="question__option">
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {options &&
            options.map((option, index) => {
              return (
                <button
                  key={index + option}
                  onClick={() => handleCheck(option)}
                  className={`question__singleOption ${
                    selected && handleSelect(option)
                  }`}
                  disabled={selected}
                >
                  {option}
                </button>
              );
            })}
        </div>

        <div className="question__controls">
          <Button
            style={{ width: "40vw", padding: 10 }}
            variant="contained"
            color="secondary"
            size="medium"
            href="/"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            style={{ width: "40vw", padding: 10 }}
            variant="contained"
            color="primary"
            size="medium"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
