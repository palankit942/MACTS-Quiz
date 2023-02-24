import React from "react";
import "./result.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Result() {
  const { questions, score } = useSelector((state) => state.category);
  const scoreArr = [10, 20, 30, 40, 50];
  const correctQues = scoreArr.indexOf(score) + 1;

  return (
    <div className="my-4 flex flex-col">
      <h2 className="result-heading my-4">Quiz Result</h2>
      <h3 className="result-score my-8 mx-auto p-2">
        You Scored: <span className="score">{score}</span>/50
      </h3>
      <h4 className="correct-ques mx-8 mb-4">
        Correct Questions :{" "}
        <span className="correct-ques-count">{correctQues}</span>/5
      </h4>
      {questions.quiz.map((item) => (
        <div key={item.question} className="ques-wrapper">
          <h4>Q. {item.question}</h4>
          {item.options.map((option) => (
            <p
              key={option.answer}
              className={`my-4 option ${
                option.isCorrect
                  ? "option-correct"
                  : option.isClick && "option-wrong"
              }`}
            >
              <i className="fas fa-angle-right"></i> {option.answer}
            </p>
          ))}
        </div>
      ))}
      <div className="play-again-wrapper">
        <Link to="/category">
          <button className="play-again-btn btn btn-primary">
            Play Again!
          </button>
        </Link>
      </div>
    </div>
  );
}

export { Result };
