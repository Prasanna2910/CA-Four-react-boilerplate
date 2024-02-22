// importing the requirements accordingly
import React from 'react';

import './Modal.css';

import { Link, Route, Routes } from 'react-router-dom';
import App from '../App';

// creating  a function called Modal to create modal
function Modal() {
  return (
    // specifing all the HTML requirments and tags such as div, h2,etc
    <div className="ModalBackground">
      <div className="ModalContainer">
        <div className="title">
          <h2>Game Over</h2>
        </div>
        {/* getting from the local storage */}
        <div className="body">
          <p>Your score is:{localStorage.getItem('score')}</p>
        </div>
        <div className="TEXTDIV">
          <p className="TEXT">
            You have got {localStorage.getItem('score')} questions Correct{' '}
          </p>
        </div>

        <div className="footer">
          {/* linking the page */}
          <Link to="/">
            <button onClick={() => window.location.reload()} className="GoBAck">
              Play Again
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// exportring the modal component
export default Modal;
