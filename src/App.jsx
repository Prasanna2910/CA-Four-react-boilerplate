import React, { useEffect, useMemo, useState } from 'react';

import './App.css';

import questions from './questions';
import Modal from './Modal';
// import Modal from './Modal';

function App() {
  const [state, setstate] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  const [score, setScore] = useState(0);

  const [light, setTheme] = useState(true);

  const [themeName, setThemeName] = useState('light');

  function skip() {
    if (state === 4) {
      setOpenModal(true);
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

  useEffect(() => {
    if (light) {
      setThemeName('light');
    } else {
      setThemeName('dark');
    }
  }, [light]);

  const handleClick = () => {
    if (light) {
      document.body.style.backgroundImage =
        "url('data:image/jpeg;base64,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')";
    } else {
      document.body.style.backgroundImage =
        "url('https://musallamuttaqin3k.files.wordpress.com/2017/11/abstract-art-colorful-colors-design-illustration-light-theme-wallpaper-17.jpg')";
    }
    setTheme(!light);
  };

  const themeMode = useMemo(() => {
    return {
      backgroundColor: light ? 'white' : '#ffffff',
    };
  }, [light]);

  localStorage.setItem('score', score);

  return (
    <div>
      <div className="questionNumberAndToggle">
        {state + 1} out of 5
        <button onClick={handleClick} className="ToggleBTN">
          {themeName}
        </button>
      </div>

      <div className="QuestionDiv">
        <p className="questionTEXT">{questions[state].text}</p>
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
    </div>
  );
}

export default App;
