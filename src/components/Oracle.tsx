/* eslint-disable */
import React, { } from "react";
import ReactDom from 'react-dom';
import { OracleType } from "../App";
import { useNavigate } from "react-router-dom";

export interface Props {
  oracle: OracleType;
  onClose: () => void;
}

export const Oracle: React.FC<Props> = ({ onClose, oracle }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
    onClose();
  }

  return ReactDom.createPortal(
    <>
      <div
        style={{ position: 'absolute', top: '0', width: '100vw', height: '100vh' }}
        onKeyPress={() => handleClose()}
        onClick={() => handleClose()}
      >
      </div>
      <div className="wrapper">
        <div>
          <div className="description">
            <div className="description__content">
              <button
                className="description__content-button"
                onKeyPress={() => handleClose()}
                onClick={() => handleClose()}
              >
                Закрити
              </button>
              <div>{oracle.text}</div>
            </div>
          </div>
        </div>
      </div>
    </>
,
    document.getElementById("portal")!
  )
}

export default Oracle
/* eslint-disable */