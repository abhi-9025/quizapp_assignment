import React, { useState } from "react";
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

  const navigate=useNavigate()

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
  }

  const handleNext=()=>{
    if(currQuestion>=(questions.length-1) && selected)
       {
        navigate('/result')
       }
       else if(selected){
            setCurrentQuestion(currQuestion+1)
            setSelected()

       } else{
        setError('Please select an Option First')
       }
  }
  const handleQuit=()=>{



  }



  return (
    <div className="question__container">
      <h1>Question : {currQuestion + 1}</h1>
      <div className="question__singleQuestionContainer">
        <h2>{questions[currQuestion].question}</h2>
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
