/* eslint-disable */
import React, { } from "react";
import ReactDom from 'react-dom';
import { Link } from "react-router-dom";
import { OracleType } from "../App";
import { data } from '../data';

export interface Props {
  onSelect: (oracle: OracleType) => void;
}

export const OracleCells: React.FC<Props> = ({ onSelect }) => {

  return (
    <div className="oracle">
      {data.map(oracle => (
        <div className="oracle__cell" key={oracle.id}>
          <Link to={`/${oracle.id}`} style={{ textDecoration: 'none'}}>
            <div onClick={() => onSelect(oracle)}>
              <div className="oracle__cell-num">{oracle.oracleNumber}</div>
            </div>
          </Link>
        </div>
        
      ))}
    </div>
  )
}

export default OracleCells
/* eslint-disable */