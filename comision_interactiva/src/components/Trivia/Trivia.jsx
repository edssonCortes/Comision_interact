import Axios from "axios";
import "./Trivia.css";
import React, { useState, useEffect } from "react";
import Questionaire from "../Questionaire/Questionaire";


const API_URL = "https://mocki.io/v1/93b9602d-9605-444a-8f80-1370fe39f5b1";

function Trivia( {setMostrar}) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    Axios.get(API_URL)
      .then((res) => res.data)
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
  };

  return (
    <div>
      {questions.length > 0 ? (
        <div className="container">
          {currentIndex >= questions.length ? (
            <>
              <h1 className="score">Tu puntaje de la verdad es: {score}</h1>
              <button
                className="normal-button"
                onClick={() => setMostrar(false)}
              >
                Intentar de nuevo
              </button>
            </>
          ) : (
            <Questionaire
            
              handleAnswer={handleAnswer}
              showAnswers={showAnswers}
              handleNextQuestion={handleNextQuestion}
              data={questions[currentIndex]}
            />
          )}

          {score <= 1 && currentIndex >= questions.length ? (
            <h2 className="score2">
              Te recomendamos documentarte mejor e intentarlo de nuevo.
            </h2>
          ) : (
            <h2 className="score"> </h2>
          )}

          {score > 1 && score <= 2 && currentIndex >= questions.length ? (
            <h2 className="score2">
              Ya casi estas listo para difundir el mensaje de la verdad, intentalo de nuevo.
            </h2>
          ) : (
            <h2 className="score"> </h2>
          )}

          {score > 2 && score<= 3 && currentIndex >= questions.length ? (
            <h2 className="score2">
              ¡Excelente!, estas listo para difundir el mensaje de la verdad.
            </h2>
          ) : (
            <h2 className="score"> </h2>
          )}
        </div>
      ) : (
        <div className="container">Cargando</div>
      )}
    </div>
  );
}

export default Trivia;
