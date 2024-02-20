import React from 'react';

import './Modal.css';

import { Link, Route, Routes } from 'react-router-dom';
import App from './App';

function Modal() {
  return (
    <div className="ModalBackground">
      <div className="ModalContainer">
        <div className="title">
          <h2>Game Over</h2>
        </div>
        <div className="body">
          <p>Your score is:</p>
        </div>

        <div className="footer">
          <Link to="/">
            <button onClick={() => window.location.reload()}>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Modal;
