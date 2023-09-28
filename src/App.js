import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Home, Quiz, Result } from "./pages";
import { useState } from "react";
import Questions from "./utils/questions";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const fetchQuestion = (difficulty) => {
    const arrayOfQuestions = Questions.filter(
      (data) => data.difficulty === difficulty
    );

    setQuestions(arrayOfQuestions);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestion={fetchQuestion}
              />
            }
          />
          <Route
            exact
            path="quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                setQuestions={setQuestions}
                score={score}
                setScore={setScore}
              />
            }
          />
          <Route
            exact
            path="result"
            element={<Result name={name} score={score} />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
