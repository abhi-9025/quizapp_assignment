import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import quizimg from "../../assets/images/quiz.jpeg";
import { Button, MenuItem, TextField} from "@mui/material";
import Difficulty from "../../utils/difficulty";
import { ErrorMessage } from "../../components";
const Home = ({ name, setName, fetchQuestion }) => {
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
// fetching questions based on difficulty level
  const handleSubmit = () => {
    if (!difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestion(difficulty);
      navigate("/quiz");
    }
  };
  return (
    <div className="home__container">
      <div className="home__quiztype">
        <span style={{ fontSize: 26 }}>Quiz type</span>

        <div className="home__selectQuizType">
          {error && (
            <ErrorMessage severity="error">Please fill all the fields...</ErrorMessage>
          )}
          <TextField
            label="Enter your name..."
            variant="outlined"
            style={{ marginBottom: 25 }}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            select
            label="Select Difficulty..."
            variant="outlined"
            style={{ marginBottom: 25 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            {Difficulty.map((value) => (
              <MenuItem key={value.id} value={value.difficulty}>
                {value.difficulty}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            style={{ padding: 10 }}
            size="medium"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src={quizimg} className="home__banner" alt="quiz image" />
    </div>
  );
};

export default Home;
