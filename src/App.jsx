import React, { useEffect, useState } from 'react';
import './App.css';
import questions from './questions';
import Result from './components/Result';
import QuestionBox from './components/QuestionBox';
import Modal from './Modal';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [state, setstate] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  const [score, setScore] = useState(0);

  function skip() {
    if (state === 4) {
      setOpenModal(true);
      // console.log('modal');
    } else {
      setstate(state + 1);
    }
  }

  function scoretable(e) {
    if (state < questions.length) {
      if (questions[state].options[e].isCorrect === true) {
        setScore(score + 1);
        skip();
        questions[state].options[e].isCorrect = false;
      }
      skip();
    }
  }

  return (
    <div>
      <div className="QuestionDiv">
        <p className="ques">{questions[state].text}</p>
      </div>

      <div className="ButtonsDiv">
        <button className="btn1" onClick={() => scoretable(0)}>
          {questions[state].options[0].text}
        </button>

        <button onClick={() => scoretable(1)} className="btn2">
          {questions[state].options[1].text}
        </button>

        <button onClick={() => scoretable(2)} className="btn3">
          {questions[state].options[2].text}
        </button>

        <button className="btn4" onClick={() => scoretable(3)}>
          {questions[state].options[3].text}
        </button>
      </div>

      <div>
        <button className="skip" onClick={skip}>
          Skip
        </button>
      </div>

      <div>{openModal && <Modal />}</div>
      <div>
        <h1>{score}</h1>
      </div>
    </div>
  );
}

export default App;
